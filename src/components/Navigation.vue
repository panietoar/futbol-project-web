<template>
  <aside class="navigation" :class="{navClosed: open}">
    <ul>
      <li v-for="item in items" :key="item.title">
        <i class="material-icons">{{ item.icon }}</i>
        <router-link :to="item.route">{{ item.title }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    open: Boolean
  },
  data() {
    return {
      items: [
        { title: 'Players', icon: 'person', route: '/' },
        { title: 'Teams', icon: 'group', route: '/teams' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  $icon-color: #888;

  .navigation {
    background-color: #FFF;
    width: 25%;
    position: absolute;
    top: 0;
    bottom: 0;
    box-shadow: 4px 0 16px 0px rgba(0, 0, 0, .38);

    transition: transform 0.5s;

    ul {
      margin-top: 5em;
    }

    li {
      list-style: none;
      margin: 0.5em 0;

      i,
      a {
        vertical-align: middle;
      }

      i {
        color: $icon-color;
      }

      a {
        text-decoration: none;
        margin-left: 30px;

        &.router-link-exact-active {
          color: #00aaff;
        }
      }
    }
  }

  .navClosed {
    transform: translateX(-100%);
  }
</style>
