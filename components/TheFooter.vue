<template>
    <footer class="border-t border-gray-200 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 py-10">
            <!-- Main Footer Content -->
            <div class="flex flex-col md:flex-row md:justify-between gap-8 md:gap-3">
                <!-- Logo and Navigation -->
                <div class="flex flex-col gap-7">
                    <div>
                        <img src="/svg/logo.svg" alt="Events in Minutes" class="l-0 h-14 w-auto" />
                    </div>
                    <nav class="flex flex-wrap gap-5">
                        <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
                        <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Corporate
                            Events</a>
                        <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Personal
                            Events</a>
                        <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">List Your
                            Service</a>
                        <a href="#" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
                    </nav>
                </div>

                <!-- Contact Information -->
                <div class="flex flex-col gap-4">
                    <h3 class="text-base font-semibold text-gray-900">Contacts</h3>
                    <div class="space-y-3">
                        <a href="mailto:contact@eventsinminutes.com"
                            class="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2">
                            <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.88976 0.587158H15.2756C15.6 0.587597 15.9111 0.722716 16.1405 0.962884C16.3699 1.20305 16.4989 1.52866 16.4993 1.86831V10.9729C16.4989 11.3125 16.3698 11.638 16.1404 11.8782C15.911 12.1183 15.6 12.2534 15.2756 12.2538H1.88976C1.56536 12.2534 1.25437 12.1183 1.02497 11.8782C0.795566 11.638 0.666481 11.3125 0.666016 10.9729V1.86831C0.666435 1.52866 0.795499 1.20305 1.0249 0.962884C1.25431 0.722716 1.56533 0.587597 1.88976 0.587158ZM1.40825 10.8706L6.26046 6.42049L1.40825 1.97035V10.8706ZM6.82184 6.93509L1.87023 11.4764C1.87656 11.4764 1.88325 11.4764 1.88976 11.4764H15.2756C15.2821 11.4764 15.2888 11.4764 15.2951 11.4764L10.3433 6.93509L9.38807 7.81141C9.166 8.01758 8.87949 8.13142 8.58268 8.13142C8.28588 8.13142 7.99936 8.01758 7.77729 7.81141L6.82184 6.93509ZM10.9049 6.42049L15.7571 10.8706V1.97035L10.9049 6.42049ZM1.87023 1.36458L8.26443 7.22867C8.35246 7.30953 8.46557 7.35411 8.58268 7.35411C8.69979 7.35411 8.8129 7.30953 8.90093 7.22867L15.2951 1.36458C15.2886 1.36458 15.2821 1.36458 15.2756 1.36458H1.88976C1.88325 1.36421 1.87656 1.36421 1.87023 1.36458Z"
                                    fill="#222222" />
                            </svg>

                            contact@eventsinminutes.com
                        </a>
                        <a href="tel:+1(628)587-3235"
                            class="text-sm text-gray-600 hover:text-gray-900 transition-colors flex gap-2">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.1028 12.509C16.8892 12.1795 16.533 11.9485 16.1418 11.8859L12.3513 11.2544C11.8975 11.1744 11.4345 11.3253 11.1059 11.6548L11.0258 11.7349C10.839 11.9218 10.5812 12.0019 10.3318 11.9485C9.65525 11.7975 9.02378 11.5573 8.43652 11.2186C6.88829 10.3469 5.99821 9.02968 5.52691 8.08622C5.43765 7.89937 5.42014 7.695 5.4827 7.49896C5.54526 7.30292 5.68707 7.14276 5.87392 7.04517C6.50539 6.73403 6.8082 5.9866 6.58547 5.31926L5.34838 1.60884C5.11732 0.932319 4.40492 0.531914 3.70255 0.710442C1.74473 1.20011 0.45511 3.05948 0.695353 5.03481C0.998165 7.52651 2.03922 11.0501 5.25997 13.7369C8.02693 16.0418 11.1151 16.629 13.2239 16.7091H13.384C15.2084 16.7091 16.8367 15.4545 17.2905 13.6394C17.3881 13.2565 17.3172 12.8385 17.0944 12.509H17.1028ZM16.4271 13.4608C16.0709 14.8848 14.7362 15.8808 13.2681 15.8191C11.3019 15.739 8.41899 15.1959 5.83803 13.0521C2.83916 10.5521 1.86986 7.25957 1.58456 4.92804C1.3977 3.39732 2.40288 1.95586 3.92442 1.57382C4.17384 1.51126 4.42241 1.6539 4.51168 1.89415L5.74877 5.60456C5.82885 5.85399 5.7129 6.13844 5.48183 6.2544C5.08143 6.45043 4.7878 6.79745 4.64514 7.22455C4.5025 7.64247 4.53837 8.09626 4.7344 8.48833C5.26828 9.5469 6.26512 11.015 8.00021 12.0027C8.65837 12.3764 9.3791 12.6525 10.1357 12.821C10.6788 12.9453 11.2477 12.7768 11.6481 12.3672L11.7281 12.2872C11.8524 12.1629 12.0218 12.1003 12.1994 12.1362L15.9899 12.7676C16.1409 12.7943 16.2661 12.8744 16.3545 12.9987C16.4346 13.123 16.4613 13.2748 16.417 13.4617L16.4271 13.4608Z"
                                    fill="#222222" />
                                <path
                                    d="M9.18408 7.04521L9.0773 7.93528C9.05979 8.08627 9.12151 8.2381 9.23746 8.33569C9.35342 8.43328 9.51358 8.45998 9.65538 8.41577L10.1717 8.23809C10.412 8.15801 10.6789 8.17553 10.91 8.29148C11.4614 8.5676 12.067 8.70107 12.6809 8.70107C12.9838 8.70107 13.2857 8.66519 13.5885 8.60347C15.1459 8.26563 16.3647 6.96597 16.6316 5.38272C16.8452 4.08391 16.4448 2.81094 15.5372 1.88585C14.6204 0.96075 13.3483 0.54198 12.0495 0.747201C10.3678 1.00496 8.99722 2.36633 8.73029 4.04803C8.59682 4.90223 8.73029 5.74724 9.104 6.51303C9.2016 6.69989 9.19325 6.90425 9.1749 7.05609L9.18408 7.04521ZM9.62036 4.18066C9.82473 2.87267 10.8841 1.82243 12.1921 1.61807C13.2065 1.45791 14.1942 1.78741 14.9057 2.50814C15.6173 3.22888 15.9292 4.22572 15.7599 5.24008C15.5555 6.46799 14.6121 7.47316 13.4017 7.73177C12.6718 7.89193 11.951 7.80268 11.3104 7.49153C11.0526 7.35806 10.7673 7.2955 10.4829 7.2955C10.3319 7.2955 10.1893 7.31301 10.0466 7.34888L10.0733 7.15285C10.1175 6.76996 10.0733 6.40543 9.91314 6.10262C9.6195 5.51536 9.51273 4.84801 9.6195 4.18067L9.62036 4.18066Z"
                                    fill="#222222" />
                                <path
                                    d="M10.9283 5.14166C11.1777 5.14166 11.3729 4.94563 11.3729 4.69705C11.3729 4.44763 11.1768 4.25244 10.9283 4.25244C10.6788 4.25244 10.4836 4.44847 10.4836 4.69705C10.4836 4.94648 10.688 5.14166 10.9283 5.14166Z"
                                    fill="#222222" />
                                <path
                                    d="M12.7075 5.14166C12.957 5.14166 13.1522 4.94563 13.1522 4.69705C13.1522 4.44763 12.9561 4.25244 12.7075 4.25244C12.4581 4.25244 12.2629 4.44847 12.2629 4.69705C12.2629 4.94648 12.4673 5.14166 12.7075 5.14166Z"
                                    fill="#222222" />
                                <path
                                    d="M14.487 5.14166C14.7364 5.14166 14.9316 4.94563 14.9316 4.69705C14.9316 4.44763 14.7355 4.25244 14.487 4.25244C14.2375 4.25244 14.0424 4.44847 14.0424 4.69705C14.0424 4.94648 14.2467 5.14166 14.487 5.14166Z"
                                    fill="#222222" />
                            </svg>


                            +1 (628) 587-3235
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Footer -->
            <div
                class="flex flex-col md:flex-row md:justify-between items-center mt-12 pt-8 border-t border-gray-200 gap-4 text-center md:text-left">
                <div class="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-500">
                    <a href="#" class="hover:text-gray-700 transition-colors">Privacy Policy</a>
                    <span class="text-gray-400">•</span>
                    <a href="#" class="hover:text-gray-700 transition-colors">Terms & Conditions</a>
                </div>
                <p class="text-xs text-gray-600">
                    © 2024 Events In Minutes. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>