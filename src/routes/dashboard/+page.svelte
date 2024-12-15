<div class="flex bg-[#1c1a25] min-h-screen">
  <div class="bg-[#0f0e17] min-h-screen w-1/5 max-w-52 rounded-2xl flex flex-col">
    <div class="text-center">
      <p class="text-[#fffffe] font-bold text-xl my-10 mx-auto">
        <span class="text-[#fffffe]">Skill</span><span class="text-[#FFA62F]">Hive</span>
      </p>
    </div>
    <div class="space-y-10 flex-grow">
      <div class="space-y-2.5">
        <p class="text-[#fffffe] font-bold text-sm px-10">MAIN</p>
        <button class="w-full rounded-r-lg py-2 text-[#fffffe] text-center hover:bg-[#FFA62F] hover:text-[#0f0e17]">Dashboard</button>
      </div>
      <div class="space-y-2.5">
        <p class="text-[#fffffe] font-bold text-sm px-10">LESSONS</p>
        <button class="w-full rounded-r-lg py-2 text-[#fffffe] text-center hover:bg-[#FFA62F] hover:text-[#0f0e17]">Your Lessons</button>
        <button class="w-full rounded-r-lg py-2 text-[#fffffe] text-center hover:bg-[#FFA62F] hover:text-[#0f0e17]">Notebook</button>
      </div>
      <div class="space-y-2.5">
        <p class="text-[#fffffe] font-bold text-sm px-10">RECENTLY READ</p>
        <button class="w-full rounded-r-lg py-2 text-[#fffffe] text-center hover:bg-[#FFA62F] hover:text-[#0f0e17]">Lesson 1</button>
        <button class="w-full rounded-r-lg py-2 text-[#fffffe] text-center hover:bg-[#FFA62F] hover:text-[#0f0e17]">Lesson 2</button>
        <button class="w-full rounded-r-lg py-2 text-[#fffffe] text-center hover:bg-[#FFA62F] hover:text-[#0f0e17]">Lesson 3</button>
      </div>
    </div>
    <div class="px-10 w-full mt-auto py-10">
      <button class="w-full rounded-lg py-2 font-bold text-[#fffffe] text-center hover:bg-[#FFA62F] hover:text-[#0f0e17]">Logout</button>
    </div>
  </div>
  
  <div class = "space-y-20 w-screen">
      <nav class = "flex items-center justify-between py-7 w-full bg-[#0f0e17]">
          <form class="px-16 ">   
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="px-10 block w-full p-4 ps-10 text-sm rounded-lg bg-transparent ring-transparent outline-none text-[#fffffe]" placeholder="Search Lessons..." required />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#FFA62F] font-medium rounded-lg text-sm px-4 py-2">Search</button>
              </div>
          </form>
        <div class ="flex space-x-5 items-center">
          <img class="w-5 h-5 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAAk1BMVEXw8PAAAAD///9ITlYAABuKjI4AAAb09PT4+PjS09MAFykAABYAFCcAESUACyH7+/sAABIAAAvo6OnMzc5OTk0HFieXmZ2Bg4Xf3+AACx6+v8Goqaw9QEhWWF1qa26sra0EDhgtLTM5OTsmJzBlZGQiIii0trcYGyFyc3YjJzQnKixfYWcOExkrLztcXFwWGyoxOEJZEEfzAAAE4klEQVR4nO2abVejOhCAGQid0LwQQHlvsdVSqu7q//91G7xnvffuaoGiEs/J88GjFejTdEgmMziOxWKxWCwWi8VisVgsFovFYrFYLJdAadhD6dIiE0HqYtKkfuanTYIuxaWFRoMYV94qUowRxlS08qoYv4c9OkEHQLiQ2pwRKTgB6ALnG9jTwFcrzhmwerPdbje1/o3zVeQHxgc+beqIc4gemiTI4zjOg6R5AOA8qhvD5d3uUXIFWa6D/hUnz0Bx+di5S+udAR0PtOOD4/4/uNF1tvozgWdu0GO8jdasrsK/DTGsarZWD7Gh8hhnjLM6eTusaeLp/2aGymNzI8iP/L07kuY/iLhpjHTHnEkB76r38iAKlZsoH24UhzI8d0QJXG3OHbEQNIE1ZOencJrpY965H5bE3ZCiHggIzOuCbIxzp8mRQzoUy5gCPxo38GFGZB0Muge1JJlpER//JKwbnkKwY+SnYXM8JrWU6fCAhqmUdWKWO22f5G5EINNkJ59aswKepkruR8QCxnsZpWa5Y7qSV2NCAa/kanA6+mL8SF6NSc/dKxn5ZrnjFPfs03UmMcndsHGnfbyP2RW9xLtZ9yqtiNyPSG8x30tWGebenuRtOWJ+L2/lybD5/SVRGbWujkl7vhi8I+xucHFCZ8vInWHqekALeRoMGlqeZDHi6/laMD8IGJ64MxAH83asbqfEYSBDxOQolIHVMcxhrQb2c3Sj1mDesPc7J72RTs8Nqpv223HTov0fasbhzNxNW+Cs/kKfCWCyK8ShfafFgdgehLw3bM/0ClZHIXfVm/KI1U6KY/XlUiNB9IHLY4d/xw3F7ig5+Ab3nfTdKDlT7UvH4Df9Hy1jXJ6/kxfHbfaKC6ibIKaUamn9Mw6aGgRX+8Zo9b4QsFVkTeDUpU2ZJEnZpN0J9Ctqa1w97C9o3NbaVSpgp7quTwyU1J/luY2NV+/D29H2QISQPUIQgLr9Lt1hh7pxutnvbg9Ph9vdfpPG7jcY81cwdJ2gLNuyDBz3jd6ZaYR/diZpzx+vhSamM+im3eCCj7mfusZ9CzT2ItgM5bdxB5Fn2oSD5b3i0ZA7xlvg6r40auSxOhAeecMxk3jRmhwqg+Rdvyg4ZGd6q7+heQa8uPGNyQ5cH4SAt3PfP9G5cH+wKfI0jbgkZ7vC/yUsieSG9A+w0TuO4dLMv/RFGnE04cECDPZE3EwqMdL2RpC9CZW9vm4x8XEq2vT1kE/yGY++TzlMLhe5nT5r6fuV9hUlb/q3jx7j555X+QrQI8X9BRsimhwKcsFn/kDC5pEr/6JTfcUfmwWTSozvSHF1UYERg6uCDBfsPw/aXotLy+lhWojr5bo3GHfRqE782yfvZdQtNvAYnER08Uzn+pE8LbZAoV5i4OKRw1ifvVxm8MDI8+ULjPss1fYDbaagB47DjD4vrfT5CwU8LWFWBwZz7T4h//xIQh/kczzjAvGzBH+Z5cn1iOpmXaFTxFsmIXNhxBOR5+ifloRl3KkO93aOO231FRaJ95f5eVapBcs568McMABOZrXtMFEcFllZtbsQM90LsZz79Ux3Yd2nv7N1t+5T3/l7u/Przp9Dx5eb39dcreag+Hoh9xjIfBbafIRV7c2lrhYqL1F3Pka0ECwWi8VisVgsFovFYrFYLBaLxWL5YH4BKBdSa0a+IpkAAAAASUVORK5CYII=" alt="Rounded avatar">
          <p class = "text-sm font-normal text-[#fffffe]">Idris Lakdawala</p>
        </div>
          

        <div>

      </nav>
    <div class="px-10 space-y-10">
      <div class="">
        <p class = "text-4xl font-extrabold text-[#fffffe] ">Welcome, <span class="text-[#FFA62F]">Idris   Lakdawala</span>!</p>
      </div>
      <div>
        <div class="grid grid-cols-3 gap-4 drop-shadow-lg">
          <div class="bg-[#0f0e17] p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Your Lessons</p>
            <p class = "text-sm font-normal   text-[#fffffe]">You have made 5 lessons.</p>
          </div>
          <div class="bg-[#0f0e17] p-5 rounded-lg drop-shadow-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Your Upvotes</p>
            <p class = "text-sm font-normal   text-[#fffffe]">You have 5 upvotes.</p>
          </div>
          <div class="bg-[#0f0e17] p-5 rounded-lg drop-shadow-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Your Comments</p>
            <p class = "text-sm font-normal   text-[#fffffe]">You have 5 comments.</p>
          </div>
         
        </div>
      </div>
      <div class="space-y-5 bg-[#0f0e17] p-5 text-center rounded-lg">
      <div class="text-4xl font-bold text-[#fffffe]">
        Lessons
      </div>
      <div class="grid grid-cols-3 gap-4 drop-shadow-lg divide-x">
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Title</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
            <div class="flex space-x-7 py-2 justify-center">
              <div class="flex flex-col">
                <button class="bg-green-400 rounded-xl p-1">Upvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
              <div class="flex flex-col">
                <button class="bg-red-400 rounded-xl p-1">Downvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
            </div>
          </div>
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Title</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
            <div class="flex space-x-7 py-2 justify-center">
              <div class="flex flex-col">
                <button class="bg-green-400 rounded-xl p-1">Upvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
              <div class="flex flex-col">
                <button class="bg-red-400 rounded-xl p-1">Downvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
            </div>
          </div>
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Title</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
            <div class="flex space-x-7 py-2 justify-center">
              <div class="flex flex-col">
                <button class="bg-green-400 rounded-xl p-1">Upvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
              <div class="flex flex-col">
                <button class="bg-red-400 rounded-xl p-1">Downvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
            </div>
          </div>
         </div>
        </div>
      <div class="space-y-5 bg-[#0f0e17] p-5 text-center rounded-lg">
      <div class="text-4xl font-bold text-[#fffffe]">
        Notebook
      </div>
      <div class="grid grid-cols-3 gap-4 drop-shadow-lg divide-x">
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Page</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
            
            </div>
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Page</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
          </div>
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Page</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
           
          </div>
         </div>
        </div>
        
        <div class="space-y-5 bg-[#0f0e17] p-5 text-center rounded-lg">
      <div class="text-4xl font-bold text-[#fffffe]">
        Recently Read
      </div>
      <div class="grid grid-cols-3 gap-4 drop-shadow-lg divide-x">
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Title</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
            <div class="flex space-x-7 py-2 justify-center">
              <div class="flex flex-col">
                <button class="bg-green-400 rounded-xl p-1">Upvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
              <div class="flex flex-col">
                <button class="bg-red-400 rounded-xl p-1">Downvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
            </div>
          </div>
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Title</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
            <div class="flex space-x-7 py-2 justify-center">
              <div class="flex flex-col">
                <button class="bg-green-400 rounded-xl p-1">Upvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
              <div class="flex flex-col">
                <button class="bg-red-400 rounded-xl p-1">Downvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
            </div>
          </div>
          <div class=" p-5 rounded-lg">
            <p class = "text-2xl font-semibold   text-[#fffffe]">Title</p>
            <p class = "text-sm font-normal   text-[#fffffe]">Description</p>
            <div class="flex space-x-7 py-2 justify-center">
              <div class="flex flex-col">
                <button class="bg-green-400 rounded-xl p-1">Upvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
              <div class="flex flex-col">
                <button class="bg-red-400 rounded-xl p-1">Downvotes</button>
                <p class = "text-lg font-normal   text-[#fffffe]">10</p>
              </div>
            </div>
          </div>
         </div>
        </div>
        <p class="text-[#1c1a25]">a</p>
    </div>
    
  </div>
</div>
