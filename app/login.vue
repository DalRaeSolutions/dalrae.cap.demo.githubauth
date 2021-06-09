<template>
<div class="min-h-screen bg-white flex">
  <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <div class="wave waveAnimation">👋</div>
        <h2 class="font-extrabold text-center">
          <!-- <div class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900">You need to...</div> -->
          <a href="/auth/github">
            <div 
              class="rounded-md cursor-pointer leading-normal text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 hover:shadow-inner shadow-xl"
              >Log on!
            </div>
          </a>
        </h2>
      </div>
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1 bg-gradient-to-r from-blue-50 via-gray-100 to-gray-50">
    <img class="shadow-lg shadow-inner absolute inset-0 h-full w-full object-cover" src="/background.svg" alt="">
  </div>
</div>
</template>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }

  a.loading {
    opacity: 0.3;
    pointer-events: none;
  }
	.wave {
		font-size: 4em;
		margin-left: calc(50% - 0.5em);
		padding-bottom: 0.5em;
	}
	.waveAnimation {
		animation-name: waveAnimation;  /* Refers to the name of your @keyframes element below */
		animation-duration: 1.5s;        /* Change to speed up or slow down */
		animation-iteration-count: 1;  /* Never stop waving :) */
		transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
		animation-delay: 1.5s;
		display: inline-block;
	}
	@keyframes waveAnimation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(6.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
    20% { transform: rotate(-3.0deg) }
    30% { transform: rotate(6.0deg) }
    40% { transform: rotate(-2.0deg) }
    50% { transform: rotate(4.0deg) }
    60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }
  }
</style>