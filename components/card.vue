<template>
    <div class="card">
        <div class="flex flex-col gap-2 py-4 h-24 bg-cardHeader px-12">
            <h1 class="z-[2]"> 
              <div class="underline"></div>
              {{ post.title }}
            </h1>
            <button>
              <h2><a :href="post.link">GO TO PROJECT</a></h2>
            </button>
          </div>
          
          <div class="flex flex-row justify-center place-items-center gap-2 py-2 px-12 h-72 bg-card">
    
            <div class="w-1/2 h-3/4 bg-sky-500 rounded-xl min-w-[229px]"></div>
    
            <div class="w-fit sm:w-1/2 h-3/4 flex flex-col justify-between place-items-center py-8">
    
              <p class="text-xs w-fit"> {{ post.content_1 }}</p>
              <p class="hidden sm:block text-xs w-fit"> {{ post.content_2 }}</p>
    
              <h2>
                {{ post.tech }}
              </h2>
              
            </div>
          </div>
    </div>
</template>

<script>

    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    export default {
        props: {
            post: Object
        },
        mounted() {
        }
    }
</script>