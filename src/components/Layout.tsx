import { Fragment } from "react";
import type { FC, ReactElement } from "react";
import { Disclosure } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface LayoutProps {
  children?: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <Fragment>
    <Disclosure as="nav" className="bg-gray-800">
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
      {children}
    </main>
  </Fragment>
);

export { Layout };
