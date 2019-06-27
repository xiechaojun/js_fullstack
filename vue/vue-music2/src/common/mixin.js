import {mapGetters,mapMutations,mapActions} from 'vuex'
export const searchMixin = {
  data () {
    return {
      query: '',
      refreshDelay:120
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    onQueryChange (query) {
      // console.log(query)
      this.query = query.trim()
    },
    blurInput () {},
  },
}