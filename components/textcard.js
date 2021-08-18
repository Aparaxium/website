import Image from "next/image";
import Link from "next/link";

export default function Textcard(props) {
  //console.log(props)
  return (
    <li>
      <div className="h-80 bg-gray-200 border-8 ">
        <div className="h-2/6">
          <div className="justify-center flex pt-6">
            <p className="text-4xl font-bold">Insert text.</p>
          </div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-minus"
            >
              <line x1="0" y1="12" x2="24" y2="12"></line>
            </svg>
          </div>
        </div>
        <div className=" h-4/6 p-4 m-4 justify-center flex">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin dui accumsan sapien maximus posuere. Sed feugiat
            vehicula interdum. Donec venenatis ac neque vel pharetra. Ut laoreet
            ultrices porttitor. Nulla quis rhoncus dolor. Vivamus ornare
            pharetra risus non semper. Vestibulum lobortis ligula nec velit
            ullamcorper ultrices. Integer quis sapien non arcu porttitor
            fringilla. Etiam vel facilisis ante. Aliquam blandit interdum erat,
            ut semper nisi egestas sit amet. Ut tincidunt erat nec quam
            elementum, sed convallis justo fermentum.
          </p>
        </div>
      </div>
    </li>
  );
}
