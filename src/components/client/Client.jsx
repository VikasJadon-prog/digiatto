import React from 'react';
import '../client/Client.css'
import { MdArrowOutward } from "react-icons/md";

const client = () => {
  return (
    <div className="home-client mt-10">
            <div className="w-full">
              <div className="w-full flex justify-center ">
                <div className="home-client-inner">
                  <div className="flex items-center gap-x-2">
                   <div className='home-client-det-pic'>
                   <img
                      className="h-14 w-14 rounded-full"
                      src="https://s3-alpha-sig.figma.com/img/9bda/31b7/4e857b1f1208e23fd327ef4951c38510?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ofB21t~ZP9YYswuoYEuAx2FAeGtZO5cq0ucVde~6WP6CB-Qdg5Zi91FI3ke~8yt3LZwyWufl-XO3YwnNQjX3sDmayMNi1OaXNZlAzHUtup-Q54~OZ~VuQsSqr2vO7FyA~MvH58GO4MIN7GVu6sVyPzPOfoa-3aksmko38QIEOGUcTrSc0IoETjXVSKGwFHYz3bH9ZFijDEzNBCy3QVl4jNni4YxMsjMWWj74-2SQKfQUwezEsBfiVutYo0NWtcL8OigjR9ZfPB~lEJ62PUVXzroBEZbzXbHjcllz7FrE8IhZm4jw0ShPRl2Uo5ARxTNxtEoBDlXuW6L-tvKfB~Tu6A__"
                      alt="fsddg"
                    />
                   </div>
                    <div className="client-feed rounded-lg text-sm px-4 py-1  items-center">
                      <h3 className="text-base mt-2 font-semibold leading-6 tracking-tight text-yellow-400 ">
                        Harold Rose
                      </h3>
                      <p className="text-sm mb-2 font-semibold leading-6 text-white">
                        AB-Sutra Welness
                      </p>
                    </div>
                  </div>
                  <div className="client-feed-img flex items-center ">
                    <img
                      className="w-[80px] h-[80px] rounded-full opacity-[0.6]"
                      src="https://s3-alpha-sig.figma.com/img/b6b8/236c/2ea6e6f0296a83388cca9c063d2ff77a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9C3wcjw-GHBnOHwraIkUbOxn~Z22wD2ZgecgEvhXshpFGLhmqZZFeqwRSJObjKTg5dOqAaGHIUSplvaW2v2ykh~SFwBhBVph38SFUXbJpJlT~W-Ub1QymrgXvanpoI426ZS76NwvPaijxqhx5iU7SIaKbOXfk-e3d51yKWG1DzxxfQw~RCqIFkK5kt5FSX4lyKbiwBoRwkYswSBtX75Sh7~qcZcOYRtgWu92eEeKGLtVwrWdQkzbzFCFPCwh2Dy2DK2K0dcrZZ0-8r9rsiFGeEdGJHgKNMLlw63-RGYqFO4Kw4imLo2JNsppgX1KtpBVRjfMVjx~umeCLzAmN02~g__"
                      alt="dfdfgdf"
                    />
                  </div>
                </div>
              </div>
              <div className="client-des">
                <div
                  className="home-des mx-auto max-w-2xl lg:text-center"
                  style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
                >
                  <p className="mt-9 text-5xl font-bold tracking-tight text-white lg:text-5x1">
                   <span > Global 1k+</span> Clients worked with us, Have a Project, Let’s
                    Discuss
                  </p>

                  <button
                    type="button"
                    className=" mt-12 text-white  hover:bg-blue-800 text-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Let's Discuss
                    <MdArrowOutward className="ml-2 text-lg" />
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-center ">
                <div className="home-client-inner-1 w-full">
                  <div className="client-feed-img1 flex items-center ">
                    <img
                      className="h-16 w-16 rounded-full opacity-[0.6]"
                      src="https://s3-alpha-sig.figma.com/img/8fa9/17e5/0f203ff1d0c80244ae1ff5e6568e118e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gWbmzLybK1uzY9F13R~eul3OK6HIGscOybFYTqT1cv6bwtiJ-ylOtd6SkCf4Wt3t0myDBwOdhVvwWFuhorxEU7V-Yl-nWc-14bpzU4-wV4rMx2aEi8LVXKETWYlC~QzPfBZ6Aj6QxRVpu1KZqGPmejqugJA-gbdO4F3h8gI0ZlCNoL7dWizQNVLqrHxFituWqlbd4tIfpFA~k~jOcJD0YO78EiTT9maqgq9NET1yujriYI6n2sJWdw4eMZ1Wa97Xr7umeTu4No9HluCXuodz~asVaBrK55VBR7S-9F87jJPqP-eQcJnR8q625YLE6Hs6VjD-yabGcJABvG5eaUN~yw__"
                      alt=""
                    />
                  </div>
                  <div className="client-feed1 flex items-center gap-x-2">
                    <div className="client-feed rounded-lg text-sm px-4 py-1  items-center">
                      <h3 className="text-base mt-2 font-semibold leading-6 tracking-tight text-yellow-400 ">
                        Michael Smith
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-white">
                        Virtue Care
                      </p>
                    </div>
                    <img
                      className="client-feed-img3 mb-2 h-16 w-16 rounded-full opacity-[0.6]"
                      src="https://s3-alpha-sig.figma.com/img/917d/b8f2/3a972fa9be078b0c5c17d693c1169543?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipOp6E7kzWOcs1SK-AVBAaIF-xyMrOPGHeedhbz04oVN7PpAmWyZpHhWIFm9dbDnyAbpcZzVxF93sLAAslQCAa~BmdxkNpMUiZFv1HthdVEG2B6xhAKOpmm-u7YzF--ndAy2NCNaZ13-Q7aYWs0UxEItZcBgWH~iXR-eymFzg6keHoUyPTB8YXtxmMITeVpS-x8a2Ny5YqyBZj9WRcJvJ6Wz5IaqngqYbR2oSwhVSUMw8fiixqWiBKDGxmEJ3nPmWhWkZTVGT7uWg47VsggrhKbcjPp~ccEv5RTSZ2sFPO6LNvzJG0hKVX-KsTGDVpETb~-SInuW4OLUDI6n8a5~6A__"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default client