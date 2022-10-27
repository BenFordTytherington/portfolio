<template>
  <div class="top-section" id="page-start">
    <div class="navbar">
      <a class="nav-title" href="#page-start">./HOME</a>
      <a class="nav-title" href="#card-section">./PROJECTS</a>
      <a class="nav-title" href="#about-section">./ABOUT</a>
    </div>
    <div class="text-container">
      <h1 class="main-title">
        BE<span class="lit-l">N</span> <span class="lit-r">F</span>ORD
      </h1>
      <h2 class="description">
        DEVELOPER & STUDENT
      </h2>
    </div>
    <ClientOnly>
      <Renderer ref="renderer" resize="window">
        <Camera ref="camera" :position="{z: 17}"/>
        <Scene ref="scene" :background="0x232226">
          <SpotLight color="#FB4A3F" :intensity="0.25" :position="{x: 0, y: 10, z: 0}"/>
          <PointLight ref="pointLight" :scale="{x: 0.25, y: 0.25, z: 0.25}" :intensity="0.75" :color="0xFFAF0F">
            <Mesh>
              <SphereGeometry />
              <LambertMaterial :props="{emissive: '#FFAF0F', emissiveIntensity: 3}"/>
            </Mesh>
          </PointLight>
  
          <Mesh ref="icosahedron" >
            <IcosahedronGeometry />
            <BasicMaterial color="#FFAF0F" :props="{wireframe: true}"/>
          </Mesh>
          
          <!-- left side large -->
          <Sphere v-for="i in 2" 
          :ref="`ballLarge${i}`" 
          :position="{
            x: (largeVarianceX * Math.random()) - largeOriginX, 
            y: (largeVarianceY * Math.random()) - largeOriginY, 
            z: (largeVarianceZ * Math.random()) 
          }"
          :scale="getScale(
            1.25 - (0.5 * Math.random())
          )"
          >
            <PhongMaterial />
          </Sphere>
  
          <!-- right side large -->
          <Sphere v-for="i in 2" 
          :ref="`ballLarge${i + 2}`"  
          :position="{
            x: (-1 * largeVarianceX * Math.random()) + largeOriginX, 
            y: (-1 * largeVarianceY * Math.random()) + largeOriginY, 
            z: (-1 * largeVarianceZ * Math.random()) 
          }"
          :scale="getScale(
            1.5 - (0.5 * Math.random())
          )"
          >
            <PhongMaterial />
          </Sphere>
        
          <!-- left side medium -->
          <Sphere v-for="i in 4" 
          :ref="`ballMedium${i}`"  
          :position="{
            x: (mediumVarianceX * Math.random()) - mediumOriginX, 
            y: (mediumVarianceY * Math.random()) - mediumOriginY, 
            z: (mediumVarianceZ * Math.random()) 
          }"
            :scale="getScale(
              (0.5 * Math.random() + 0.25)
            )"
            >
            <PhongMaterial />
          </Sphere>
  
          <!-- right side medium -->
          <Sphere v-for="i in 4" 
          :ref="`ballMedium${i + 4}`"  
          :position="{
            x: (-1 * mediumVarianceX * Math.random()) + mediumOriginX, 
            y: (-1 * mediumVarianceY * Math.random()) + mediumOriginY, 
            z: (-1 * mediumVarianceZ * Math.random())
          }"
            :scale="getScale(
              (0.75 * Math.random() + 0.15)
            )"
            >
            <PhongMaterial />
          </Sphere>
  
        </Scene>
        <EffectComposer>
          <RenderPass />
          <UnrealBloomPass :strength="1.9" :threshold="0.68"/>
        </EffectComposer>
        </Renderer>
    </ClientOnly>
  </div>
  <div class="card-container" id="card-section">

    <Card v-for="post in posts" :post="post"></Card>

  </div>
  <div class="cards-curve-layer"></div>

  <div class="skills-container" id="about-section">
    <h1 class="relative top-32 left-24 text-[4rem] text-zinc-200">
      # SKILLS / ABOUT
    </h1>
    <div class="flex flex-row justify-center place-items-start pt-48">

      <p class="inline-block top-64 px-24 text-lg text-zinc-200 w-1/2 break-words">
        Chartreuse intelligentsia mlkshk, la croix echo park hella meggings bespoke vibecession hashtag air plant four loko. Stumptown mixtape kale chips, sus meh bruh same live-edge tumblr woke snackwave knausgaard ennui health goth semiotics. Copper mug freegan listicle coloring book 3 wolf moon snackwave hella portland farm-to-table. Coloring book banjo quinoa heirloom hoodie cloud bread.
        Banjo praxis XOXO, cred readymade cray austin stumptown hammock food truck vinyl farm-to-table offal. Shabby chic waistcoat bespoke typewriter, meggings thundercats ascot lumbersexual DIY kinfolk master cleanse enamel pin swag. Occupy pork belly hammock vaporware waistcoat JOMO. 8-bit kinfolk letterpress scenester hell of sustainable 3 wolf moon craft beer hexagon tousled XOXO austin messenger bag aesthetic. Stumptown DSA chillwave, meditation shabby chic yr kickstarter cardigan plaid artisan beard mixtape tote bag humblebrag. Typewriter helvetica fixie, bespoke humblebrag pinterest four loko asymmetrical etsy fam wolf. Brooklyn viral biodiesel, keffiyeh venmo bodega boys pour-over JOMO adaptogen franzen schlitz pickled retro intelligentsia man braid.
      </p>
      <div class="flex flex-row justify-between place-items-start h-1/2 pr-24 w-1/2">
  
        <div class="flex flex-col justify-start gap-8 w-1/4 h-full">
  
          <div class="w-full outline h-1/3">
            <div class="h-1/4 outline flex justify-center place-items-center">
              <h1 class=" text-left">
                SKILL TYPE
              </h1>
            </div>
            <div class="min-h-3/4 place-items-center grid grid-cols-3">
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
            </div>
          </div>
  
        </div>
  
        <div class="flex flex-col justify-start gap-8 w-1/4 h-full">
  
          <div class="w-full outline h-1/3">
            <div class="h-1/4 outline flex justify-center place-items-center">
              <h1 class=" text-left">
                SKILL TYPE
              </h1>
            </div>
            <div class="min-h-3/4 place-items-center grid grid-cols-3">
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
            </div>
          </div>
  
          <div class="w-full outline h-1/3">
            <div class="h-1/4 outline flex justify-center place-items-center">
              <h1 class=" text-left">
                SKILL TYPE
              </h1>
            </div>
            <div class="min-h-3/4 place-items-center grid grid-cols-3">
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
            </div>
          </div>
  
        </div>
  
  
        <div class="flex flex-col justify-start gap-8 w-1/4 h-full">
  
          <div class="w-full outline h-1/3">
            <div class="h-1/4 outline flex justify-center place-items-center">
              <h1 class=" text-left">
                SKILL TYPE
              </h1>
            </div>
            <div class="min-h-3/4 place-items-center grid grid-cols-3">
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
            </div>
          </div>
  
          <div class="w-full outline h-1/3">
            <div class="h-1/4 outline flex justify-center place-items-center">
              <h1 class=" text-left">
                SKILL TYPE
              </h1>
            </div>
            <div class="min-h-3/4 place-items-center grid grid-cols-3">
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
            </div>
          </div>
  
          <div class="w-full outline h-1/3">
            <div class="h-1/4 outline flex justify-center place-items-center">
              <h1 class=" text-left">
                SKILL TYPE
              </h1>
            </div>
            <div class="min-h-3/4 place-items-center grid grid-cols-3">
                <p class="skill">skill</p>
                <p class="skill">skill</p>
                <p class="skill">skill</p>
            </div>
          </div>
  
  
        </div>
  
  
      </div>
    </div>

  </div>
</template>
<style>
  @import 'styles.scss';
</style>

<script>

import {
  Renderer,
  Camera,
  PointLight,
  SpotLight,
  Sphere,
  Box,
  Mesh,
  IcosahedronGeometry,
  SphereGeometry,
  Group,
  Plane,
  PhongMaterial,
  SubSurfaceMaterial,
  BasicMaterial,
  StandardMaterial,
  LambertMaterial,
  EffectComposer,
  UnrealBloomPass,
  RenderPass,
  Scene,
  MatcapMaterial,
  AmbientLight,

} from 'troisjs'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './components/card.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  setup() {
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Studio Treble` : "Studio Treble";
      },
    });
  },
  data() {
    return {
      largeSpheres: [],
      mediumSpheres: [],
      mediumOriginX: 6,
      mediumVarianceX: 2,
      mediumOriginY: 3,
      mediumVarianceY: 5,
      mediumVarianceZ: 2,
      largeOriginX: 6,
      largeVarianceX: 2,
      largeOriginY: 0,
      largeVarianceY: 2,
      largeVarianceZ: 3,
      animMediumMagX: 0.02,
      animMediumMagY: 0.01,
      animMediumMagZ: 0.01,
      animMediumFreqX: 1,
      animMediumFreqY: 1,
      animMediumFreqZ: 0.5,
      animMediumVarianceX: 5,
      animMediumVarianceY: 5,
      animMediumVarianceZ: 2,
      animLargeMagX: 0.005,
      animLargeMagY: 0.0075,
      animLargeMagZ: 0.002,
      animLargeFreqX: 0.5,
      animLargeFreqY: 0.25,
      animLargeFreqZ: 0.125,
      animLargeVarianceX: 5,
      animLargeVarianceY: 8,
      animLargeVarianceZ: 1,
      yRotationScale: 100,
      xRotationScale: 200,
      zStart: 17,
      posts: [
        {
          title: 'PROJECT 1',
          content: 'Subway tile palo santo meh VHS marfa, sartorial hammock sustainable organic bruh. Lo-fi seitan vexillologist truffaut pinterest ugh. Street art kogi fam vibecession, la croix tonx bruh woke.',
          tech: 'NUXT, VUE, TAILWIND'
        },
        {
          title: 'PROJECT 2',
          content: 'baby kitsch actually beard 90s, mustache pickled cardigan letterpress mixtape bitters tacos subway tile knausgaard ascot blue bottle. Put a bird on it yes plz wolf marfa leggings flannel, bodega boys cornhole fingerstache af listicle',
          tech: 'RUST'
        },
        {
          title: 'PROJECT 3',
          content: 'Put a bird on it enamel pin hammock, bicycle rights knausgaard semiotics kickstarter mukbang authentic quinoa ugh keffiyeh XOXO cronut. Tumblr tote bag semiotics, try-hard bitters mustache hammock',
          tech: 'PYTHON, FAUNADB, FASTAPI'
        }
      ]
    }
  },
  components: {
    Renderer,
    Camera,
    PointLight,
    SpotLight,
    Sphere,
    Box,
    Mesh,
    IcosahedronGeometry,
    SphereGeometry,
    Group,
    Plane,
    PhongMaterial,
    SubSurfaceMaterial,
    BasicMaterial,
    StandardMaterial,
    LambertMaterial,
    EffectComposer,
    UnrealBloomPass,
    RenderPass,
    Scene,
    MatcapMaterial,
    AmbientLight,
    Card
  },
  mounted() {

    const cards = gsap.utils.toArray('.card');
    cards.forEach(card => {
      gsap.from(card, { 
        x: -800,
        ease: 'elastic',
        duration: 2,
        scrollTrigger: {
          trigger: card,
          start: 'centre centre'
        }
      })
    });

    let t = 0;
    let tPeriodic = 0;
    let x = 0;
    let y = 0;
    const sceneArea = document.querySelector(".top-section")
    const text = document.querySelector(".text-container")

    setTimeout(() => {
      const renderer = this.$refs.renderer;
      const ico = this.$refs.icosahedron;
      const cam = this.$refs.camera.camera;
      const light = this.$refs.pointLight.light;

      for (let i = 1; i < 9; i++){
        let refName = 'ballMedium' + i

        this.mediumSpheres.push(
          {
            offset: Math.random(),
            mesh: this.$refs[refName]
          }
          );
      }

      for (let i = 1; i < 5; i++){
        let refName = 'ballLarge' + i

        this.largeSpheres.push(
          {
            offset: Math.random(),
            mesh: this.$refs[refName]
          }
          );
      }

      sceneArea.addEventListener("mousemove", 
          (e) => {
            x = (window.innerWidth / 2 - e.pageX) / 25;
            y = (window.innerHeight / 2 - e.pageY) / 25;
          })

      sceneArea.addEventListener("mouseleave", 
      (e) => {
        text.style.transition = 'all 2s ease';
        x = 0;
        y = 0;
      })

      sceneArea.addEventListener("mouseenter", 
      async (e) => {

        text.style.transition = 'all 0.5s ease';

        await this.sleep(1000)
        text.style.transition = '';

      })

      renderer.onBeforeRender(
        () => {

          cam.position.x = x / this.xRotationScale * this.zStart;
          cam.rotation.y = x / this.xRotationScale;

          cam.position.y =  - y / this.yRotationScale * this.zStart;
          cam.rotation.x = y / this.yRotationScale;

          text.style.transform = `rotateX(${y / 1.5}deg) rotateY(${-(x / 2)}deg) translateX(4rem) translateY(2rem)`
          
          for (const ball of this.mediumSpheres){
            ball.mesh[0].mesh.position.y += this.animMediumMagY * Math.sin(this.animMediumFreqY * t + (this.animMediumVarianceY * ball.offset));
            ball.mesh[0].mesh.position.z += this.animMediumMagZ * Math.cos(this.animMediumFreqZ * t + (this.animMediumVarianceZ * ball.offset));
            ball.mesh[0].mesh.position.x += this.animMediumMagX * Math.sin(this.animMediumFreqX * t + (this.animMediumVarianceX * ball.offset));

          }

          for (const ball of this.largeSpheres){
            ball.mesh[0].mesh.position.y += this.animLargeMagY * Math.sin(this.animLargeFreqY * t + (this.animLargeVarianceY * ball.offset));
            ball.mesh[0].mesh.position.z += this.animLargeMagZ * Math.cos(this.animLargeFreqZ * t + (this.animLargeVarianceZ * ball.offset));
            ball.mesh[0].mesh.position.x += this.animLargeMagX * Math.sin(this.animLargeFreqX * t + (this.animLargeVarianceX * ball.offset));

          }


          ico.mesh.rotation.x += 0.08 * Math.abs( (t / 12) - Math.floor( (t / 12) + 0.5 ));
          ico.mesh.rotation.y += 0.08 * Math.abs( (t / 12) - Math.floor( (t / 12) + 0.5 ));
          ico.mesh.rotation.z += 0.005;

          light.position.y = 0.25 * Math.sin(0.25 * t);
          ico.mesh.position.y = light.position.y;

          t += 0.025
          tPeriodic = (t % 8)
        }
      )
    }, 100);

  },
  methods: {
    getScale(value) {
      return {x: value, y: value, z: value};
    },

    lerp(a, b, time) {
      return (1 - time) * a + time * b;  
    },

    sleep(time) {
      return new Promise(
        resolve => setTimeout(resolve, time)
      );
    }

  }
}
</script>
