import * as React from "react"
import { Dimensions } from "react-native"
import Svg, { Path, } from "react-native-svg"

const HomeTileSVG = (props) => (
  <Svg
    width={Dimensions.get('window').width}
    height={Dimensions.get('window').height /4}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M-316.128 521.166a123.389 123.389 0 0 1-64.11-17.23 257.26 257.26 0 0 1-26.345-19.176c-12.433-9.852-24.168-19.154-37.574-23.975-8.225-2.938-69.775-19.218-132.489-33.827-87.41-20.127-119.19-23.784-130.354-24.165l.106-3.171c11.27.38 43.282 4.059 130.946 24.376 62.777 14.546 124.581 30.868 132.849 33.827 13.913 4.99 25.838 14.461 38.482 24.483a256.087 256.087 0 0 0 26.029 18.9c32.858 19.916 76.119 22.221 115.933 6.174 39.815-16.047 69.311-47.802 79.101-84.948 5.349-20.296 6.343-42.453 7.252-63.891 1.776-40.951 3.32-76.322 31.442-94.905 10.085-6.66 22.391-9.704 35.416-12.939 11.968-2.96 24.316-6.026 35.818-12.157 36.072-19.197 49.414-58.33 62.333-96.195 2.813-8.267 5.477-16.068 8.458-23.7C7.928 90.337 29.58 65.581 51.041 57.061a39.036 39.036 0 0 1 32.54.55c14.379 6.955 23.153 22.008 32.436 37.949a244.786 244.786 0 0 0 14.653 23.087 116.303 116.303 0 0 0 173.217 14.407 116.277 116.277 0 0 0 32.558-55.76 299.677 299.677 0 0 0 5.836-35.942c4.355-35.73 8.457-58.013 28.861-66.787 16.641-7.125 34.487.656 55.145 9.662 15.583 6.787 31.716 13.806 48.97 14.8C511.688 1.14 540.233-23.3 567.826-46.81c26.832-22.897 52.163-44.398 81.342-38.732 10.318 2.114 21.376 7.632 32.075 13.044 20.975 10.571 44.784 22.664 67.662 8.457 20.827-12.896 23.11-37.527 25.098-59.197.571-6.131 1.099-11.924 2.009-17.357 5.222-31.523 29.475-61.671 64.87-80.635 17.528-9.408 34.211-34.314 51.867-60.677 17.655-26.364 39.328-58.902 56.222-62.094l.592 3.108c-15.604 2.96-37.087 35.053-54.34 60.825-17.888 26.702-34.783 51.945-53.009 61.713-34.55 18.499-58.189 47.717-63.242 78.352-.888 5.327-1.417 11.057-1.967 17.146-2.114 22.473-4.419 47.928-26.599 61.67-24.295 15.053-48.928 2.58-70.664-8.456-10.572-5.328-21.356-10.804-31.251-12.686-27.657-5.454-52.438 15.645-78.657 38.056-28.079 23.954-57.089 48.626-94.81 46.618-17.867-.994-34.233-8.14-50.07-15.032-19.981-8.71-37.256-16.237-52.606-9.64-18.861 8.096-22.773 29.598-26.98 64.186a303.973 303.973 0 0 1-5.899 36.321 119.351 119.351 0 0 1-92.298 88.068 119.38 119.38 0 0 1-66.179-5.555 119.353 119.353 0 0 1-52.965-40.06 239.25 239.25 0 0 1-14.801-23.256c-9.05-15.518-17.592-30.17-31.103-36.702a35.95 35.95 0 0 0-30.046-.655C31.397 68.245 10.465 92.26-.002 119.81c-2.896 7.568-5.54 15.349-8.351 23.573-13.11 38.457-26.663 78.225-63.835 97.992-11.862 6.343-24.421 9.408-36.558 12.41-12.687 3.172-24.802 6.153-34.423 12.516-26.768 17.696-28.291 52.327-30.025 92.411-.951 21.586-1.924 43.933-7.358 64.546-10.043 38.056-40.322 70.678-80.982 87.084a146.376 146.376 0 0 1-54.594 10.824Z"
      fill="#E5F2FF40"
    />
    <Path
      d="M-316.107 532.245a134.532 134.532 0 0 1-69.882-18.817 266.713 266.713 0 0 1-27.487-19.915c-11.693-9.281-22.751-18.034-34.423-22.241-6.766-2.411-66.414-18.352-131.263-33.362-66.879-15.497-100.203-21.142-116.293-23.003l.253-2.114c16.239 1.945 49.647 7.506 116.632 23.024 64.912 15.053 124.751 31.015 131.474 33.446 12.031 4.229 23.259 13.171 35.036 22.558a257.939 257.939 0 0 0 27.276 19.768c36.093 21.903 83.499 24.546 126.865 7.061 43.367-17.484 75.549-52.283 86.311-93.024 5.688-21.564 6.682-44.398 7.633-66.47 1.713-39.175 3.066-70.127 26.008-85.286 8.33-5.518 19.642-8.308 31.716-11.289 12.686-3.151 25.796-6.343 38.61-13.214 40.321-21.48 55.1-64.8 68.126-103.003 2.79-8.161 5.413-15.857 8.246-23.256 9.494-24.948 28.82-47.4 47.003-54.63a26.94 26.94 0 0 1 22.752.21c11.037 5.328 18.903 18.838 27.255 33.13a246.87 246.87 0 0 0 15.414 24.229 128.344 128.344 0 0 0 56.931 42.745 128.353 128.353 0 0 0 134.102-27.047 128.332 128.332 0 0 0 35.907-61.47 306.247 306.247 0 0 0 6.196-37.38c4.334-35.581 8.288-51.353 21.588-57.082 11.798-5.074 26.663 1.416 45.481 9.598 16.577 7.23 33.683 14.694 53.177 15.772 41.316 2.283 73.054-24.8 101.07-48.626 25.648-21.861 47.764-40.698 71.15-36.09 8.669 1.713 19.03 6.935 28.925 11.967 21.483 10.867 50.873 25.75 79.46 8.034 25.986-16.11 28.651-45.223 30.807-68.479.55-6.004 1.057-11.543 1.882-16.49 4.609-27.823 26.536-54.715 58.633-71.883 20.214-10.824 37.7-36.956 56.222-64.63 17.74-26.47 37.573-54.969 48.632-56.977l.402 2.114c-11.038 2.114-35.459 38.562-47.194 56.089-18.671 27.886-36.305 54.25-57.09 65.328-31.526 16.914-53.029 43.193-57.554 70.381-.803 4.884-1.311 10.381-1.84 16.216-2.114 23.933-4.926 53.574-31.716 70.212-29.602 18.33-59.605 3.15-81.532-7.949-9.832-4.968-20.002-10.106-28.375-11.776-22.434-4.419-44.149 14.102-69.311 35.56-28.397 24.208-60.515 51.608-102.634 49.261-19.854-1.1-37.15-8.647-53.875-15.94-18.375-7.993-32.858-14.314-43.811-9.6-12.348 5.286-16.112 20.656-20.32 55.329a316.22 316.22 0 0 1-6.258 37.548 132.736 132.736 0 0 1-100.858 96.216 125.4 125.4 0 0 1-24.612 2.432c-40.703 0-81.024-19.366-105.573-52.221a250.26 250.26 0 0 1-15.541-24.419c-8.183-14.017-15.9-27.251-26.346-32.304a24.974 24.974 0 0 0-21.144-.148c-17.676 7.019-36.516 28.985-45.82 53.404-2.811 7.421-5.433 15.095-8.203 23.256-13.173 38.584-28.08 82.326-69.142 104.187-13.046 6.956-26.282 10.233-39.095 13.404-11.799 2.918-22.942 5.687-30.955 10.994-22.075 14.588-23.386 45.053-25.077 83.637-.952 22.178-1.967 45.117-7.697 66.893-10.953 41.48-43.684 76.829-87.579 94.546a157.439 157.439 0 0 1-58.675 11.586Z"
      fill="#E5F2FF40"
    />
    <Path
      d="M-316.107 543.957a146.135 146.135 0 0 1-75.929-20.507 273.675 273.675 0 0 1-28.608-20.698c-10.974-8.711-21.292-16.914-31.188-20.444-5.857-2.114-64.891-17.929-129.952-33.003-43.98-10.19-78.424-17.251-102.38-20.972l.338-2.115c23.999 3.742 58.485 10.804 102.528 21.015 65.124 15.096 124.286 30.952 130.185 33.066 10.213 3.658 20.658 11.945 31.716 20.719a275.179 275.179 0 0 0 28.46 20.614c39.244 23.784 90.519 26.744 137.184 7.885 46.665-18.858 81.511-56.575 93.204-100.931 6.004-22.77 7.019-46.237 8.013-68.901 1.628-37.294 2.791-64.229 20.806-76.111 6.639-4.397 17.021-6.955 28.016-9.683 13.363-3.319 27.17-6.744 41.274-14.249 44.402-23.616 60.599-71.248 73.666-109.515 2.77-8.097 5.35-15.687 8.098-22.918 8.289-21.755 25.373-41.924 40.428-47.95 6.64-2.642 10.572-1.458 13.405-.126 7.845 3.784 15.182 16.364 22.265 28.541a258.972 258.972 0 0 0 16.133 25.371c25.838 34.566 69.247 56.047 113.291 56.025 8.867.012 17.714-.859 26.409-2.6 51.867-10.423 95.36-51.903 108.195-103.236a311.943 311.943 0 0 0 6.343-38.816c4.081-33.51 7.506-44.673 14.632-47.738 7.125-3.066 20.636 2.79 36.199 9.577 17.57 7.653 35.649 15.54 57.216 16.723 1.839.106 3.679.148 5.497.148 43.261 0 76.838-28.647 103.839-51.65 23.259-19.852 43.388-36.998 61.319-33.467 7.125 1.395 16.682 6.343 25.944 10.93 22.582 11.417 56.687 28.69 90.92 7.548 30.891-19.154 33.999-52.855 36.262-77.443.507-5.644 1.015-10.951 1.755-15.518 3.954-24.44 23.639-48.203 52.585-63.763 22.773-12.199 41.041-39.493 60.388-68.415 21.525-32.136 34.994-49.155 41.189-52.009l.888 1.923c-3.954 1.819-14.145 12.199-40.322 51.269-19.495 29.176-37.911 56.661-61.149 69.134-28.375 15.201-47.659 38.394-51.57 62.052-.74 4.503-1.227 9.788-1.734 15.37-2.305 25.053-5.477 59.345-37.278 79.05-35.141 21.754-69.775 4.227-92.865-7.464-9.155-4.63-18.586-9.387-25.373-10.74-16.915-3.34-36.643 13.51-59.5 33.002-27.254 23.256-61.17 52.157-105.213 52.157-1.861 0-3.743 0-5.603-.148-21.948-1.226-40.174-9.175-57.893-16.913-15.182-6.618-28.249-12.326-34.571-9.599-6.322 2.728-9.494 14.25-13.363 46.047a323.031 323.031 0 0 1-6.343 39.092c-13.046 52.093-57.195 94.208-109.95 104.779a136.138 136.138 0 0 1-26.811 2.642c-44.699 0-88.806-21.776-114.982-56.871a260.593 260.593 0 0 1-16.239-25.37C86.711 96.829 79.543 84.524 72.27 81.014c-2.347-1.141-5.814-2.114-11.693.19-14.631 5.815-31.145 25.371-39.243 46.745-2.728 7.189-5.307 14.8-8.035 22.749-13.215 38.711-29.602 86.681-74.702 110.783-14.336 7.632-28.27 11.1-41.76 14.44-10.805 2.685-21.017 5.201-27.361 9.408-17.105 11.311-18.268 37.781-19.854 74.441-.994 22.79-2.115 46.364-8.077 69.345-11.883 45.011-47.194 83.278-94.472 102.369a168.817 168.817 0 0 1-63.179 12.473Z"
      fill="#E5F2FF40"
    />
    <Path
      d="M184.714 369.093c-15.794 0-33.006-4.228-53.621-13.34-7.211-3.151-14.4-6.66-21.356-10.043a366.59 366.59 0 0 0-33.83-15.074c-26.114-9.619-55.23-13.319-78.615-16.3-10.15-1.29-20.658-2.622-29.961-7.358-8.268-4.228-17.36-12.79-18.057-24.355-.55-9.197 4.44-17.336 8.732-22.558a118.285 118.285 0 0 1 10.297-10.571c2.22-2.115 4.525-4.229 6.66-6.491 18.206-19.028 26.939-44.778 35.375-69.768 6.872-20.233 13.976-41.142 26.113-58.817 5.455-7.928 10.72-13.171 16.556-16.47 7.57-4.227 16.43-4.925 23.11-1.711 8.141 3.89 12.307 12.262 16.324 20.359.507 1.015.994 2.114 1.501 2.981a124.404 124.404 0 0 0 30.596 38.33 95.963 95.963 0 0 0 8.458 6.026c9.641 6.342 20.573 13.53 19.135 26.385a56.185 56.185 0 0 1-2.791 10.951 56.423 56.423 0 0 0-2.643 9.979c-.233 1.67-.296 3.404-.381 5.095a26.4 26.4 0 0 1-2.283 11.544c-2.982 5.56-8.902 7.97-14.632 10.317-4.609 1.882-9.367 3.805-12.475 7.378-6.343 7.125-3.7 18.753 2.601 25.117 5.666 5.708 14.462 9.112 26.155 10.106 3.764.317 7.654.401 11.397.486 6.022.003 12.036.449 17.994 1.332a63.438 63.438 0 0 1 47.976 41.1c2.114 6.342 4.884 18.689-1.142 29.07-5.35 9.218-16.915 15.053-31.822 16.004-1.692.233-3.531.296-5.371.296ZM66.878 96.427a26.348 26.348 0 0 0-12.687 3.467c-5.54 3.15-10.572 8.161-15.837 15.835-11.989 17.421-19.03 38.204-25.86 58.288-8.457 25.138-17.337 51.1-35.944 70.466-2.115 2.262-4.504 4.461-6.745 6.575a116.857 116.857 0 0 0-10.107 10.36c-4.039 4.905-8.775 12.558-8.246 21.141.634 10.677 9.155 18.669 16.915 22.601 8.986 4.567 19.305 5.878 29.285 7.146 23.49 2.981 52.733 6.702 79.058 16.406a371.412 371.412 0 0 1 33.957 15.159c6.936 3.383 14.103 6.871 21.271 10.021 22.688 9.937 41.168 14.059 58.126 12.981 6.702-.444 23.026-2.748 30.13-14.968 5.603-9.662 3.003-21.269.952-27.337a61.197 61.197 0 0 0-46.327-39.683 121.205 121.205 0 0 0-17.698-1.311c-3.764 0-7.675-.169-11.523-.507-12.201-1.036-21.441-4.63-27.488-10.719-6.956-7.04-9.705-19.979-2.685-27.992 3.425-3.932 8.457-5.983 13.257-7.949 5.625-2.283 10.953-4.461 13.575-9.345a24.312 24.312 0 0 0 2.114-10.571c0-1.733.169-3.53.402-5.285a58.279 58.279 0 0 1 2.727-10.36 54.185 54.185 0 0 0 2.686-10.571c1.311-11.585-8.585-18.097-18.184-24.397a93.705 93.705 0 0 1-8.669-6.153 126.487 126.487 0 0 1-31.082-39.091 128.807 128.807 0 0 1-1.502-2.981c-3.869-7.78-7.886-15.814-15.35-19.408a19.602 19.602 0 0 0-8.521-1.818Z"
      fill="#E5F2FF40"
    />
    <Path
      d="M167.059 356.027a42.04 42.04 0 0 1-4.652-.253c-12.898-1.523-24.612-7.696-35.945-13.679l-5.582-2.897A303.325 303.325 0 0 0 5.813 306.725l-2.897-.212c-9.134-.634-18.564-1.311-26.895-5.391-9.113-4.44-17.084-14.546-14.695-25.243 1.776-7.907 8.33-13.108 14.674-18.14 1.268-1.015 2.537-2.009 3.742-3.023 17.867-14.948 27.107-37.083 33.176-54.715 2.114-6.068 4.038-12.347 5.92-18.415 4.504-14.461 9.155-29.429 16.154-43.172 3.15-6.215 8.268-15.179 16.239-21.374 5.434-4.228 14.61-8.626 22.582-7.061 6.343 1.226 8.67 6.342 10.89 11.057l.697 1.522a85.795 85.795 0 0 0 31.484 36.491c1.437.909 2.939 1.797 4.44 2.685 6.174 3.657 12.56 7.442 16.366 13.679 4.546 7.463 4.228 16.321 3.552 26.3-.508 6.744-1.121 15.138-5.815 21.417a39.727 39.727 0 0 1-10.805 8.985 58.34 58.34 0 0 0-7.4 5.349 29.163 29.163 0 0 0-8.688 20.697 29.174 29.174 0 0 0 8.582 20.741c8.669 7.865 21.018 9.429 32.964 10.951 3.045.381 6.195.783 9.219 1.269 13.426 2.114 23.533 6.575 30.892 13.383 9.176 8.456 13.109 21.142 9.768 31.417-4.398 13.53-19.368 20.105-32.9 20.105ZM70.345 111.755c-6.49 0-13.426 3.53-17.824 6.934-5.815 4.546-10.784 11.1-15.647 20.677-6.914 13.594-11.545 28.478-16.027 42.854-1.882 6.068-3.827 12.368-5.942 18.478-6.153 17.886-15.54 40.36-33.83 55.646-1.227 1.014-2.495 2.114-3.785 3.044-6.047 4.799-12.306 9.768-13.913 16.913-2.115 9.514 5.392 18.901 13.553 22.876 8.162 3.975 17.19 4.545 26.113 5.18l2.897.211a305.51 305.51 0 0 1 115.913 32.749l5.582 2.917c11.164 5.878 22.73 11.967 35.205 13.425 13.722 1.586 30.743-4.228 35.311-18.393 3.087-9.535-.614-21.269-9.198-29.218-7.041-6.49-16.789-10.698-29.813-12.833-2.982-.486-6.09-.888-9.114-1.269-12.284-1.564-24.971-3.171-34.126-11.48a31.251 31.251 0 0 1-9.281-22.305 31.263 31.263 0 0 1 9.386-22.262 57.698 57.698 0 0 1 7.676-5.56 37.707 37.707 0 0 0 10.255-8.457c4.228-5.814 4.926-13.869 5.391-20.338.719-9.598.973-18.097-3.256-25.032-3.51-5.793-9.663-9.429-15.625-12.96a132.414 132.414 0 0 1-4.483-2.706 87.888 87.888 0 0 1-32.266-37.379l-.719-1.543c-2.114-4.757-4.06-8.837-9.367-9.873a14.819 14.819 0 0 0-3.066-.296Z"
      fill="#E5F2FF40"
    />
    <Path
      d="M155.683 342.031a34.627 34.627 0 0 1-4.059-.232c-10.932-1.311-20.849-6.618-30.427-11.776l-4.779-2.537A247.064 247.064 0 0 0 6.892 299.473H5.03a59.049 59.049 0 0 1-16.746-1.861c-7.041-2.114-12.2-6.892-13.808-12.685-2.727-9.746 4.525-18.499 12.18-26.617 19.833-21.036 33.83-43.278 41.569-66.09.951-2.833 1.84-5.687 2.707-8.456a106.255 106.255 0 0 1 9.26-23.383c5.392-9.07 15.605-18.521 28.27-17.781 7.147.423 13.596 4.102 19.284 7.337l27.487 15.708c18.861 10.761 25.923 25.856 19.368 41.438-3.383 8.076-9.684 14.398-15.794 20.508l-.36.38c-6.618 6.639-12.327 12.685-15.118 20.529-4.715 13.15 1.269 29.831 13.617 38.055 6.639 4.377 14.611 6.47 22.328 8.457l4.61 1.247c9.05 2.495 19.178 6.131 25.605 14.144 6.428 8.013 7.422 20.994-.761 27.696a20.525 20.525 0 0 1-13.046 3.932ZM67.11 144.609c-11.143 0-20.425 8.901-25.098 16.765a104.084 104.084 0 0 0-9.05 22.918c-.888 2.897-1.776 5.772-2.727 8.626-7.866 23.108-22.011 45.603-42.035 66.85-7.252 7.696-14.124 15.92-11.693 24.61 1.67 5.94 7.506 9.682 12.39 11.205a58.23 58.23 0 0 0 16.155 1.755h1.86a249.094 249.094 0 0 1 110.479 28.245l4.8 2.558c9.409 5.053 19.135 10.275 29.602 11.522 4.588.55 10.995.402 15.604-3.361 7.21-5.899 6.026-17.759.444-24.715-6.068-7.548-15.795-11.036-24.527-13.446l-4.588-1.226c-7.866-2.115-16.007-4.229-22.942-8.774-13.363-8.795-19.558-26.195-14.441-40.466 2.939-8.16 8.796-14.482 15.604-21.311l.381-.359c5.941-5.983 12.094-12.157 15.329-19.831 8.648-20.592-10.043-33.996-18.48-38.795L86.69 151.67c-5.477-3.129-11.693-6.659-18.353-7.061H67.11Z"
      fill="#E5F2FF40"
    />
    <Path
      d="M121.451 320.382h-1.353a36.03 36.03 0 0 1-12.328-4.334l-.845-.422a206.077 206.077 0 0 0-76.415-20.593l-3.362-.211a82.091 82.091 0 0 1-17.635-2.389c-7.908-2.283-14.04-6.998-16.915-12.897-5.624-11.776 2.114-24.778 5.794-29.831 2.114-2.917 4.44-5.708 6.723-8.456a155.119 155.119 0 0 0 10.805-14.461l3.045-4.969 18.734-34.44c3.383-6.131 6.893-12.452 12.242-17.336 8.014-7.315 20.32-11.036 34.55-10.444a54.448 54.448 0 0 1 25.373 6.638 32.552 32.552 0 0 1 15.879 20.592c1.818 8.246-.233 17.823-5.899 27.739a149.731 149.731 0 0 1-8.458 12.685c-2.495 3.488-5.074 7.082-7.316 10.782-5.751 9.514-8.098 18.267-7.02 26.047 1.48 10.571 9.113 20.148 23.259 29.408l.994.634a36.139 36.139 0 0 1 9.028 7.315 12.487 12.487 0 0 1 2.326 12.791c-1.945 4.313-6.935 6.152-11.206 6.152ZM14.017 232.813c-2.305 3.34-4.694 6.702-7.273 9.768-2.242 2.663-4.568 5.454-6.619 8.308-3.404 4.736-10.74 16.914-5.603 27.675 2.58 5.37 8.246 9.641 15.562 11.776a80.639 80.639 0 0 0 17.17 2.304l3.382.212a208.056 208.056 0 0 1 77.198 20.824l.867.423a34.166 34.166 0 0 0 11.587 4.229c3.806.359 8.711-1.036 10.572-4.926 1.861-3.89 0-8.034-2.114-10.571a34.292 34.292 0 0 0-8.458-6.871l-.994-.635c-14.801-9.598-22.688-19.704-24.273-30.888-1.163-8.266 1.31-17.505 7.315-27.484 2.284-3.785 4.885-7.421 7.401-10.931 2.854-4.017 5.815-8.181 8.288-12.494 3.764-6.597 7.803-16.512 5.688-26.237a30.415 30.415 0 0 0-14.906-19.218 52.205 52.205 0 0 0-24.316-6.343c-13.702-.571-25.373 2.96-33.027 9.894-5.096 4.652-8.458 10.825-11.841 16.787l-22.836 40.529-2.77 3.869Z"
      fill="#E5F2FF40"
    />
    <Path
      d="M78.359 294.145a70.44 70.44 0 0 1-9.896-.93l-24.844-3.552c-5.646-.803-12.031-1.734-17.338-5.032-7.253-4.545-11.99-13.573-12.687-24.186-.824-13.002 3.954-25.37 8.712-35.941a170.209 170.209 0 0 1 20.805-35.117l1.333-1.712c2.516-3.341 5.37-7.104 9.282-8.753a37.806 37.806 0 0 1 16.915-1.86 38.31 38.31 0 0 1 19.918 7.632c11.354 8.731 16.577 24.567 12.433 37.696a65.853 65.853 0 0 1-5.942 12.347 60.827 60.827 0 0 0-5.814 12.05 30.55 30.55 0 0 0 1.141 20.91c.452.972.917 1.945 1.396 2.917a20.972 20.972 0 0 1 3.045 10.127c-.275 6.491-6.069 11.036-11.334 12.537a26.638 26.638 0 0 1-7.125.867ZM65.884 178.922a30.326 30.326 0 0 0-11.355 1.903c-3.383 1.438-6.068 4.968-8.457 8.076-.466.613-.91 1.205-1.354 1.755a167.012 167.012 0 0 0-20.552 34.694c-4.651 10.253-9.324 22.431-8.457 34.968.613 9.916 4.99 18.33 11.671 22.516 4.927 3.066 11.08 3.954 16.514 4.736l24.908 3.552c5.117.719 10.931 1.564 16.175 0 4.546-1.269 9.557-5.138 9.79-10.571a19.593 19.593 0 0 0-2.813-9.112 55.832 55.832 0 0 1-1.437-3.002 32.47 32.47 0 0 1-1.227-22.368 62.9 62.9 0 0 1 5.984-12.495 62.08 62.08 0 0 0 5.751-11.945c3.891-12.284-1.036-27.168-11.692-35.371a36.233 36.233 0 0 0-18.84-7.188c-1.226-.042-2.833-.148-4.61-.148ZM154.626 220.001a3.574 3.574 0 0 1-1.438-.296 5.032 5.032 0 0 1-2.114-5.772 22.618 22.618 0 0 1 2.643-6.342c.528-.952 1.036-1.903 1.48-2.897a21.137 21.137 0 0 0 .761-15.222l-.317-.93a13.178 13.178 0 0 1-.93-3.7 4.883 4.883 0 0 1 1.966-4.503 4.67 4.67 0 0 1 4.715-.148c1.322.7 2.539 1.583 3.616 2.622a25.65 25.65 0 0 0 2.389 1.881 29.607 29.607 0 0 0 11.968 3.087c1.416.169 2.812.338 4.123.55a15.81 15.81 0 0 1 6.449 2.114 6.221 6.221 0 0 1 2.854 6.617c-.972 3.319-4.842 4.334-7.4 4.99a55.202 55.202 0 0 0-25.69 15.179 7.85 7.85 0 0 1-5.075 2.77Zm4.356-38.351a2.12 2.12 0 0 0-1.206.359 2.827 2.827 0 0 0-1.057 2.601c.14 1.074.418 2.125.825 3.129.127.317.232.655.338.972a23.25 23.25 0 0 1-.846 16.766c-.465 1.036-.993 2.114-1.543 3.023a21.949 21.949 0 0 0-2.432 5.835c-.275 1.374 0 2.981.994 3.425.994.444 2.241-.233 4.039-2.114a56.453 56.453 0 0 1 26.662-15.751c2.791-.74 5.329-1.564 5.921-3.552a4.228 4.228 0 0 0-2.009-4.228 14.103 14.103 0 0 0-5.603-1.734c-1.269-.211-2.622-.38-4.018-.549-4.228-.508-9.155-1.079-12.834-3.404a21.164 21.164 0 0 1-2.643-2.114 15.694 15.694 0 0 0-3.172-2.305 3.34 3.34 0 0 0-1.416-.359ZM549.663 323.955c-8.218 0-16.443-.345-24.676-1.036-30.405-2.558-56.159-10.824-76.499-24.524-13.892-9.366-25.712-21.607-37.151-33.447-5.328-5.518-10.847-11.226-16.513-16.575a255.474 255.474 0 0 0-83.055-52.22 13.876 13.876 0 0 1-8.838-10.846 13.505 13.505 0 0 1 4.821-12.685c41.675-34.102 67.217-88.12 66.668-140.974v-.486c0-8.457-.191-17.907 8.457-22.749a17.595 17.595 0 0 1 9.092-2.114c7.485.254 13.786 3.806 19.855 7.252l2.939 1.649c47.701 26.195 112.677 16.913 151.16-21.523 3.319-3.34 9.514-9.513 16.027-4.693a10.85 10.85 0 0 1 4.081 7.42c12.137 97.253 68 187.571 149.447 241.8a21.38 21.38 0 0 1 8.458 10.211c4.63 12.368-5.392 19.662-14.632 24.652a483.039 483.039 0 0 1-41.929 20.085c-49.308 20.824-93.711 30.803-137.712 30.803ZM391.356 8.435a15.202 15.202 0 0 0-7.4 1.796c-7.591 4.229-7.506 12.686-7.422 20.889v.465c.55 53.51-25.373 108.161-67.429 142.644a11.441 11.441 0 0 0-4.081 10.74 11.802 11.802 0 0 0 7.507 9.218 257.516 257.516 0 0 1 83.752 52.664c5.687 5.37 11.227 11.099 16.577 16.639 11.354 11.754 23.11 23.911 36.727 33.108 20.045 13.509 45.439 21.628 75.485 24.165 51.909 4.355 103.184-5.032 161.415-29.599 14.188-5.983 28.227-12.685 41.739-20l.507.93-.507-.93c9.028-4.863 17.697-11.29 13.659-22.051a19.375 19.375 0 0 0-7.633-9.197C652.318 185.371 596.095 94.418 583.895-3.363a8.702 8.702 0 0 0-3.256-5.983c-4.652-3.467-9.092.317-13.257 4.461-39.117 39.134-105.193 48.626-153.676 21.882-.994-.529-1.967-1.1-2.961-1.65-5.857-3.318-11.925-6.743-18.881-6.976l-.508.063Z"
      fill="#E5F2FF40"
    />
  </Svg>
)

export default HomeTileSVG
