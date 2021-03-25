var app = new Vue ({
  el: "#app",
  data: {
    images: [
      "https://images.fidhouse.com/fidelitynews/wp-content/uploads/sites/9/2017/10/cala-mariolu.jpg?w=996",
      "https://www.sardegnaturismo.it/sites/default/files/styles/larghezza_contenitore/public/attrattori/003_cala_goloritze_-_baunei_2_tn.jpg?itok=oxvXLI_7",
      "https://www.sardegnaturismo.it/sites/default/files/styles/larghezza_contenitore/public/attrattori/shutterstock_130877654_s.teodoro_cala_brandinchi_g._maltinti.jpg?itok=jM9MSjgB"
    ],
    imgIndex: 0
  },
  methods: {
    nextImg: function() {
      this.imgIndex++;
      if (this.imgIndex == this.images.length) {
        this.imgIndex = 0;
      }
    },
    prevImg: function() {
      this.imgIndex--;
      if (this.imgIndex < 0) {
        this.imgIndex = this.images.length - 1;
      }
    },
  }
})
