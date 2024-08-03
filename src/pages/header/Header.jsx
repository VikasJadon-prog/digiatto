import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../header/Header.css";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const { navbarlogo, loading, error } = useSelector((state) => state.api);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <header
      className={`.head-cont ${visible ? "head-cont" : "header-hide"}`}
      style={{ transform: visible ? "none" : "translateY(-100%)" }}
    >
      <nav
        className="head-nav w-[100%] mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="head-left w-[40%] flex lg:flex-1">
          {navbarlogo.map((item, index) => (
            <Link to="/" className="-m-1.5 p-1.5" key={index+1}>
              <img className="h-8 w-auto" src={item.image} alt="Logo"   />
            </Link>
          ))}
        </div>
        <div className="head-right gap-x-[2rem] flex justify-space">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text--700 bg-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-8 justify-center items-center">
            <Link
              to="/"
              className={classNames(
                location.pathname === "/" ? "active" : "",
                "text-sm font-semibold leading-6 text-white"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={classNames(
                location.pathname === "/about" ? "active" : "",
                "text-sm font-semibold leading-6 text-white"
              )}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={classNames(
                location.pathname === "/services" ? "active" : "",
                "text-sm font-semibold leading-6 text-white"
              )}
            >
              Services
            </Link>
            <Popover className="relative">
              <PopoverButton
                className={classNames(
                  location.pathname === "/dedicatedDev" ? "active" : "",
                  "text-sm font-semibold leading-6 text-white flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
                )}
              >
                Pages
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-[#1e1c30] shadow-lg  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                    <div className="flex-auto">
                      <Link
                        to="/dedicatedDev"
                        className={classNames(
                          location.pathname === "/dedicatedDev" ? "active" : "",
                          "text-sm font-semibold leading-6 text-white"
                        )}
                      >
                        Dedicated Developer
                      </Link>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 ">
                    <div className="flex-auto">
                      <Link
                        to="/industries"
                        className={classNames(
                          location.pathname === "/industries" ? "active" : "",
                          "text-sm font-semibold leading-6 text-white"
                        )}
                      >
                        Industries
                      </Link>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 ">
                    <div className="flex-auto">
                      <Link
                        to="/portfolio"
                        className={classNames(
                          location.pathname === "/portfolio" ? "active" : "",
                          "text-sm font-semibold leading-6 text-white"
                        )}
                      >
                        Portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 ">
                    <div className="flex-auto">
                      <Link
                        to="/blog"
                        className={classNames(
                          location.pathname === "/blog" ? "active" : "",
                          "text-sm font-semibold leading-6 text-white"
                        )}
                      >
                        Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
            <Link
              to="/contact"
              className={classNames(
                location.pathname === "/contact" ? "active" : "",
                "text-sm font-semibold leading-6 text-white"
              )}
            >
              Contact Us
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex ylg:flex-1 lg:justify-end ">
            <button className=" bg-[#013bbe] text-white px-[12px] py-[13px] rounded-[5px] text-[1rem] font-semibold hover:bg-[#04287b]">
              Get Quote
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          style={{ backgroundColor: "#1b1b30" }}
        >
          <div className="flex items-center justify-between">
            <a href="dffdgf" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://s3-alpha-sig.figma.com/img/907d/b132/18416053887fa3a59824c11193bc926d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VhJnD49GdotYTr-7rWXOTtmLRp2sAjTFOjy6U8iQC7QidjXPpST~yy5jcpdNgP-yldD-8LJJavy7PP-~EWAkPx-4pBVlwzuTIrs3N1ZyV8Glg~mP3ZYgopuxZmKZZc4sa0jYQdnpuwYTMiT0bysXK8Vt04G7Nv1UWi1Bcebmtk8woV6U1pCEaKg0p96HVx~iyLT6hVmaK9gfJ5UMWdXIC3v-3wyq5x3b7~-0NQT4lEzSXUOcGvTtIrzQNP6NZtn4abNdrqnXXFp-tu8rTXJGakBFhdV1XqWZZ2q5pPfv2rinFuxzqqhraDfFiHvg0vC~oSjmWgwOuI-JwM3M0PEUOA__"
                alt="Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2 rounded-md p-2 bg-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 bg-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className={classNames(
                    location.pathname === "/" ? "active" : "",
                    "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  )}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={classNames(
                    location.pathname === "/about" ? "active" : "",
                    "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  )}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className={classNames(
                    location.pathname === "/services" ? "active" : "",
                    "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  )}
                >
                  Services
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black">
                        Pages
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        <div className="p-4">
                          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                            <div className="flex-auto">
                              <Link
                                to="/dedicatedDev"
                                className={classNames(
                                  location.pathname === "/dedicatedDev"
                                    ? "active"
                                    : "",
                                  "text-sm font-semibold leading-6 text-white"
                                )}
                              >
                                Dedicated Developer
                              </Link>
                            </div>
                          </div>
                          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 ">
                            <div className="flex-auto">
                              <Link
                                to="/industries"
                                className={classNames(
                                  location.pathname === "/industries"
                                    ? "active"
                                    : "",
                                  "text-sm font-semibold leading-6 text-white"
                                )}
                              >
                                Industries
                              </Link>
                            </div>
                          </div>
                          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 ">
                            <div className="flex-auto">
                              <Link
                                to="/portfolio"
                                className={classNames(
                                  location.pathname === "/portfolio"
                                    ? "active"
                                    : "",
                                  "text-sm font-semibold leading-6 text-white"
                                )}
                              >
                                Portfolio
                              </Link>
                            </div>
                          </div>
                          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 ">
                            <div className="flex-auto">
                              <Link
                                to="/blog"
                                className={classNames(
                                  location.pathname === "/blog" ? "active" : "",
                                  "text-sm font-semibold leading-6 text-white"
                                )}
                              >
                                Blog
                              </Link>
                            </div>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/contact"
                  className={classNames(
                    location.pathname === "/contact" ? "active" : "",
                    "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  )}
                >
                  Contact Us
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
