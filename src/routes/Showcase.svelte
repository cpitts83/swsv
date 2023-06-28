<section class="da-show relative h-screen">
  <div class="container mx-auto px-6 py-20 text-center z-10 relative">
    <h2 class="mb-6 text-4xl font-bold text-center text-filled-800">
      Wear the clothes that show your strength Salute Weightlifters
    </h2>
    <p class="mb-6 text-xl variant-gradient-primary-secondary-600">
      To the individuals that hit the gym day in and day out, persevering through the pain, and pushing themselves to a new level and personal best,
    </p>
    <button class="btn variant-filled-primary">
      <a href="/merch">Shop Now</a>
    </button>
  </div>
</section>

<style>
  .da-show {
    background-image: url('./bgimg.jpg');
    background-size: cover;
    background-position: center center;
    position: relative;
  }
  .da-show::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the 0.5 value to change the darkness of the overlay */
    z-index: 1;
  }
</style>
