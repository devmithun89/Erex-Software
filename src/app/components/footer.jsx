import React from "react";
export default function Footer() {
  return (
    <>
      <footer class="bg-white">
        <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8  ">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div>
              <div class="text-primary">Logo</div>

              <p class="mt-4 max-w-xs text-gray-500">
                Leading digital agency with solid design and development expertise. We
                build readymade websites, mobile applications, and elaborate online
                business services.
              </p>

              <ul class="mt-8 flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75">
                    <span class="sr-only">Facebook</span>
                    <svg
                      className="w-6 h-6"
                      viewBox="126.445 2.281 589 589"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" />
                      <path
                        d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                        fill="#ffffff"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75">
                    <span class="sr-only">Twitter</span>

                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75">
                    <span class="sr-only">Linkedin</span>

                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="20" fill="#0077B5" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p class="font-medium text-gray-900">What We Do</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      Web Design
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      App Design
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      Social Media Manage
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      Market Analysis Project
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p class="font-medium text-gray-900">Company</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      Career
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      Become Investor
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p class="font-medium text-gray-900">Support</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      Business
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p class="font-medium text-gray-900">Contact</p>

                <ul class="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      WhatsApp
                    </a>
                  </li>

                  <li>
                    <a href="#" class="text-gray-700 transition hover:opacity-75">
                      Support 24
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-500 items-center flex justify-center">
            &copy; Copyright © 2023 Erex Softwere.
          </p>
        </div>
      </footer>
    </>
  );
}
