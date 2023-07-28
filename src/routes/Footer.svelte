<script>
    import SoTech from '$lib/prodpics/sotechlogo.png'
    import Insta from '$lib/prodpics/instagram.png'
  </script>
  
  <footer class="bg-gray-800 text-primary">
      <div class="container mx-auto p-6 flex justify-center items-center">
          <div class="flex space-x-4"> <!-- Add flex and space-x-4 here -->
              <a
                  href="https://www.instagram.com/saluteweightlifters1/"
                  class="text-white hover:text-gray-300"
              >
                  <img src={Insta} alt="" class="imgstyle" />
              </a>
              <a href="https://www.sotechnicool.com/" class="text-white hover:text-gray-300">
                  <img src={SoTech} class="imgstyle" alt="SoTechnicool" />
                  Built by SoTechniCool
              </a>
          </div>
      </div>
  </footer>
  
  <style>
      .imgstyle {
          width: 50px;
          height: 50px;
      }
  </style>
  