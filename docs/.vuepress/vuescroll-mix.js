import store from './store';
import throttle from 'lodash.throttle';

export default {
  methods: {
    handleVueScroll: throttle(function(scrollTop) {
      this._setActiveHash(scrollTop);
    }, 300),
    _setActiveHash(scrollTop) {
      if (store.specifyAuthor) {
        store.disableScrollBehavior = true;
        this.$router.replace(
          decodeURIComponent(store.specifyAuthor),
          () => {
            // execute after scrollBehavior handler.
            this.$nextTick(() => {
              store.disableScrollBehavior = false;
            });
          },
          () => {
            // execute after scrollBehavior handler.
            this.$nextTick(() => {
              store.disableScrollBehavior = false;
            });
          }
        );

        return;
      }

      const sidebarLinks = [].slice.call(
        document.querySelectorAll('.sidebar-link')
      );
      const anchors = [].slice
        .call(document.querySelectorAll('.header-anchor'))
        .filter(anchor =>
          sidebarLinks.some(sidebarLink => sidebarLink.hash === anchor.hash)
        );

      for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        const nextAnchor = anchors[i + 1];

        const isActive =
          (i === 0 && scrollTop === 0) ||
          (scrollTop >= anchor.parentElement.offsetTop + 10 &&
            (!nextAnchor ||
              scrollTop < nextAnchor.parentElement.offsetTop - 10));

        if (
          isActive &&
          decodeURIComponent(this.$route.hash) !==
            decodeURIComponent(anchor.hash)
        ) {
          store.disableScrollBehavior = true;
          this.$router.replace(decodeURIComponent(anchor.hash), () => {
            // execute after scrollBehavior handler.
            this.$nextTick(() => {
              store.disableScrollBehavior = false;
            });
          });
          return;
        }
      }
    }
  }
};
