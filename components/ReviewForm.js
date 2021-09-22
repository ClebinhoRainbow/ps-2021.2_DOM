app.component('review-form', {
  template:
    /*html*/
    `
   
  `,
  data() {
    return {
      name: '',
      text: '',
      rating: null
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.text === '' || this.rating === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }

      const review = {
        name: this.name,
        text: this.text,
        rating: this.rating
      }
      this.$emit('review-submitted', review)
      this.name = ''
      this.text = ''
      this.rating = null
    }
  }
})
