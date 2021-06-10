<template>
  <div class="min-h-screen bg-white flex">
    <div class="overflow-hidden flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 md:text-xl text-4xl">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <div class="wave waveAnimation">👋</div>
          <h2 class="font-extrabold text-center">
            <div class="rounded-md leading-normal text-8xl sm:text-10xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-green-500">Log on</div>
          </h2>
          <div class="mt-8">
            <div>
              <div>
                <p class="text-sm font-medium text-gray-700">Sign in with</p>

                <div class="mt-1 grid grid-cols-3 gap-3">
                  <div>
                    <a href="/auth/github" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <span class="sr-only">Sign in with GitHub</span>
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1 bg-gradient-to-r from-blue-50 via-gray-100 to-gray-50">
      <img class="shadow-lg shadow-inner absolute inset-0 h-full w-full object-contain p-10 md:p-24" src="background.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.wave {
  font-size: 4em;
  margin-left: calc(50% - 0.5em);
  padding-bottom: 0.5em;
}
.waveAnimation {
  animation-name: waveAnimation; /* Refers to the name of your @keyframes element below */
  animation-duration: 1.5s; /* Change to speed up or slow down */
  animation-iteration-count: 1; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  animation-delay: 1.5s;
  display: inline-block;
}
@keyframes waveAnimation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(6deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-3deg);
  }
  30% {
    transform: rotate(6deg);
  }
  40% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(4deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}
</style>
