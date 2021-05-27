<script>
import { favouritesComputed, favouritesMethods } from '@state/helpers'

export default {
  page: {
    title: 'Favourites',
  },
  computed: {
    ...favouritesComputed,
  },
  methods: {
    ...favouritesMethods,
  },
}
</script>

<template>
  <div class="tile is-parent is-vertical">
    <div
      v-for="quote in favouriteQuotes"
      :key="quote.id"
      :class="['card', $style.quoteCard]"
    >
      <div class="card-content">
        <p class="title">
          {{ quote.text }}
        </p>
        <p class="subtitle"> {{ quote.author }} - {{ quote.movie }} </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span :class="$style.button" @click="deleteFavouriteQuote(quote)">
            <img
              :class="$style.icon"
              alt="Remove favourite"
              src="@assets/icons/iconmonstr-favorite-14.svg"
            />
            Remove from favourites
          </span>
        </p>
        <p class="card-footer-item">
          <span :class="$style.button">
            <img
              :class="$style.icon"
              alt="Share with a friend"
              src="@assets/icons/iconmonstr-copy-2.svg"
            />
            Share with a friend
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.quoteCard {
  margin-bottom: 8px;
}

.button {
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.3);
  }
}

.icon {
  width: 20px;
  height: auto;
  margin-right: 8px;
}
</style>
