<template>
  <div class="relative inline-block group">
    <button
      class="relative w-12 h-12 text-sm font-semibold text-white bg-blue-600/90 hover:bg-blue-700/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden rounded-lg"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity rounded-lg"
      ></div>

      <span class="relative flex items-center justify-center h-full">
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="w-6 h-6">
          <path
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </span>
    </button>

    <div
      class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2"
    >
      <div
        class="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]"
      >
        <div class="flex items-center gap-3 mb-2">
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-blue-400">
              <path
                clip-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-white">Use</h3>
        </div>

        <div class="space-y-2">
          <p class="text-sm text-gray-300">
            Just copy and paste the URL you want to shorten and you're done, you'll get a shortened
            URL in no time.
          </p>
        </div>

        <div
          class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-500/10 blur-xl opacity-50"
        ></div>

        <div
          class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-r border-b border-white/10"
        ></div>
      </div>
    </div>
  </div>
</template>
