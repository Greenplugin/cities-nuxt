<template>
  <div>
    <ul class="pagination">
      <li
        v-for="(page, index) in pages"
        :class="{selected: selectedPage === index}"
        :key="index"
        @click="setPage(index)">{{ index + 1 }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      all: {type: Array, default: () => []},
      value: {type: Array, default: () => []},
      size: {type: Number, default: 2}
    },
    data () {
      return {
        selectedPage: 0
      }
    },
    computed: {
      pages: {
        get () {
          let pages = this.all.reduce((chunks, item, index) => {
            // console.info(chunks)
            if (index % this.size === 0) {
              chunks.push([{id: index, item: item}])
            } else {
              chunks[chunks.length - 1].push({id: index, item: item})
            }
            return chunks
          }, []) || [[]]
          this.$emit('input', (pages[this.selectedPage] || pages[0]))
          return pages
        }
      }
    },
    mounted () {

    },
    methods: {
      setPage (index) {
        this.selectedPage = index
        this.$emit('input', this.pages[index])
      }
    }
  }
</script>

<style scoped>
  .pagination {
    list-style: none;
    margin: 0;
    padding: 10px;
  }

  .pagination > li {
    display: inline-block;
    border: solid 1px #eee;
    padding: 5px 10px;
    margin: 5px;
    color: #888;
    cursor: pointer;
  }

  .pagination > .selected {
    border-color: #888;
  }
</style>