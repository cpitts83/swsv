<script>
  import { onMount } from 'svelte';
  import  Bgimg from '$lib/prodpics/newbg.png'
  let animate = false;

  onMount(async () => {
    await new Promise(r => setTimeout(r, 1000));  // Wait for 1 second
    animate = true;
    animate = animate;  // Force reactivity
  });
</script>


<section class="h-screen flex justify-center items-center">
  <img src={Bgimg} alt="" srcset="">
  <div class="container mx-auto px-6 py-20 text-center z-10 absolute">
    <h1 class={animate ? 'fade-slide-up animate mb-6 text-4xl font-bold text-center text-filled-800' : 'fade-slide-up mb-6 text-4xl font-bold text-center text-filled-800'}>
      Wear the clothes that show your strength 
    </h1>
    <h2 class={animate ? 'fade-slide-up animate mb-6 text-4xl font-bold text-center text-filled-800' : 'fade-slide-up mb-6 text-4xl font-bold text-center text-filled-800'}>
      Salute Weightlifters
    </h2>
    <p class={animate ? 'fade-slide-up animate mb-6 text-xl variant-gradient-primary-secondary-600' : 'fade-slide-up mb-6 text-xl variant-gradient-primary-secondary-600'}>
      To the individuals that hit the gym day in and day out, persevering through the pain, and pushing themselves to a new level and personal best,
    </p>
    <button class={animate ? 'fade-slide-up animate btn variant-filled-primary' : 'fade-slide-up btn variant-filled-primary'}>
      <a href="/salutewear">Shop Now</a>
    </button>
  </div>
</section>


<style>
section {
  top: 23px;
}
 img {
  opacity: .75;
  max-width: 150rem;
  max-height: 100rem;
 }

  .fade-slide-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s, transform 0.5s;
  }
  .fade-slide-up.animate {
    opacity: 1;
    transform: translateY(0);
  }

</style>
