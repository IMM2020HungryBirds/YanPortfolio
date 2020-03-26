<template>
        <!-- Portfolio Grid -->
        <section class="bg-light page-section" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj,key) in portfolioJSON"  v-bind:key="key">
                        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fas fa-plus fa-3x"></i>
                            </div>
                            </div>
                            <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
                        </a>
                        <div class="portfolio-caption">
                            <h4>{{obj.caption}}</h4>
                            <p class="text-muted">{{obj.title}}</p>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
  
</template>

<script>
export default {
   name:'portfolio',
   data: ()=>({

       portfolioJSON:[ //[]  
            {
               img: '/somthing/random/img.jpg',
               caption: 'Threadsr',
               title: 'illustration'

           },
           {
               img: '/somthing/random/img.jpg',
               caption: 'Exploror',
               title: 'Graphic Design'

           },
           {
               img: '/somthing/random/img.jpg',
               caption: 'Finish',
               title: 'Identity'

           },

            {
               img: '/somthing/random/img.jpg',
               caption: 'Lines',
               title: 'Branding'

           },

           {
               img: '/somthing/random/img.jpg',
               caption: 'Southwest',
               title: 'Web Design'

           },

           {
               img: '/somthing/random/img.jpg',
               caption: 'Window',
               title: 'Web Photograhy'

           }
       ]
      
   }),

//    mounted(){

//        this.$axios.get(this.$backend+'/api/portfolio')
//        .then(res=>{
//            this.portfolioJSON = res.data
//        })

//    }

}

</script>

<style lang="sass">

</style>