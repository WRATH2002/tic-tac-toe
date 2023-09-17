import { RiTriangleLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { BiSquare } from "react-icons/bi";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { PiSunDimFill } from "react-icons/pi";
import { MdDarkMode } from "react-icons/md";
import { GiSelect } from "react-icons/gi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar"></div>
    </>
  );
};

const TicTacToe = () => {
  //
  const [stepFlag, setStepFlag] = useState(0);

  // For Every box to show icon
  const [box1, setBox1] = useState(0);
  const [box2, setBox2] = useState(0);
  const [box3, setBox3] = useState(0);
  const [box4, setBox4] = useState(0);
  const [box5, setBox5] = useState(0);
  const [box6, setBox6] = useState(0);
  const [box7, setBox7] = useState(0);
  const [box8, setBox8] = useState(0);
  const [box9, setBox9] = useState(0);

  // To toggle in between users
  const [userToggle, setUserToggle] = useState(0);

  //
  const [user1, setUser1] = useState(0);
  const [user2, setUser2] = useState(0);

  // To toggle user's turn in the game
  const [gameUserToggle, setgameUserToggle] = useState(1);

  // To flag end of game
  const [gameEnd, setgameEnd] = useState(true);

  // For sidebar
  const [sidebar, setSidebar] = useState(false);

  // for selecting game mode
  const [mode, setMode] = useState(0);

  //
  const [winner, setWinner] = useState(0);

  function User1(flag) {
    setUser1(flag);
    // setUserToggle(2);
    // console.log(user1);
  }
  function User2(flag) {
    setUser2(flag);
    // setUserToggle(3);
    // console.log(user2);
  }

  function checkwin() {
    if (
      box1 !== 0 &&
      box2 !== 0 &&
      box3 !== 0 &&
      box1 === box2 &&
      box2 === box3 &&
      gameEnd === true
    ) {
      if (gameUserToggle === 2) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setgameEnd(false);
      console.log("Win 1st row");
    } else if (
      box4 !== 0 &&
      box5 !== 0 &&
      box6 !== 0 &&
      box4 === box5 &&
      box5 === box6 &&
      gameEnd === true
    ) {
      if (gameUserToggle === 2) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setgameEnd(false);
      console.log("Win 2st row");
    } else if (
      box7 !== 0 &&
      box8 !== 0 &&
      box9 !== 0 &&
      box7 === box8 &&
      box8 === box9 &&
      gameEnd === true
    ) {
      if (gameUserToggle === 2) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setgameEnd(false);
      console.log("Win 3st row");
    } else if (
      box1 !== 0 &&
      box4 !== 0 &&
      box7 !== 0 &&
      box1 === box4 &&
      box4 === box7 &&
      gameEnd === true
    ) {
      if (gameUserToggle === 2) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setgameEnd(false);
      console.log("Win 1st col");
    } else if (
      box2 !== 0 &&
      box5 !== 0 &&
      box8 !== 0 &&
      box2 === box5 &&
      box5 === box8 &&
      gameEnd === true
    ) {
      if (gameUserToggle === 2) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setgameEnd(false);
      console.log("Win 2st col");
    } else if (
      box3 !== 0 &&
      box6 !== 0 &&
      box9 !== 0 &&
      box3 === box6 &&
      box6 === box9 &&
      gameEnd === true
    ) {
      if (gameUserToggle === 2) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setgameEnd(false);
      console.log("Win 3st rocolw");
    } else if (
      box1 !== 0 &&
      box5 !== 0 &&
      box9 !== 0 &&
      box1 === box5 &&
      box5 === box9 &&
      gameEnd === true
    ) {
      if (gameUserToggle === 2) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setgameEnd(false);
      console.log("dia");
    } else if (
      box3 !== 0 &&
      box5 !== 0 &&
      box7 !== 0 &&
      box3 === box5 &&
      box5 === box7 &&
      gameEnd === true
    ) {
      if (gameUserToggle === 2) {
        setWinner(1);
      } else {
        setWinner(2);
      }
      setgameEnd(false);
      console.log("dia");
    }
  }

  checkwin();

  function toggle1() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box1 === 0 && gameEnd === true) {
      setBox1(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }
  function toggle2() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box2 === 0 && gameEnd === true) {
      setBox2(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }
  function toggle3() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box3 === 0 && gameEnd === true) {
      setBox3(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }
  function toggle4() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box4 === 0 && gameEnd === true) {
      setBox4(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }
  function toggle5() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box5 === 0 && gameEnd === true) {
      setBox5(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }
  function toggle6() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box6 === 0 && gameEnd === true) {
      setBox6(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }
  function toggle7() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box7 === 0 && gameEnd === true) {
      setBox7(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }
  function toggle8() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box8 === 0 && gameEnd === true) {
      setBox8(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }
  function toggle9() {
    var flag = stepFlag;
    flag = flag + 1;
    if (box9 === 0 && gameEnd === true) {
      setBox9(gameUserToggle);
      if (gameUserToggle === 1) {
        setgameUserToggle(2);
        setStepFlag(flag);
      } else {
        setgameUserToggle(1);
        setStepFlag(flag);
      }
    }
    console.log(stepFlag);
  }

  function toggleSidebar() {
    setSidebar(!sidebar);
  }
  // function CheckWin() {
  //   if ((box1 == box2) == box3) {
  //     console.log("wing");
  //   }
  // }

  function reset() {
    setBox1(0);
    setBox2(0);
    setBox3(0);
    setBox4(0);
    setBox5(0);
    setBox6(0);
    setBox7(0);
    setBox8(0);
    setBox9(0);
    setgameUserToggle(1);
    setStepFlag(0);
  }

  function modeF() {
    setMode(1);
    setUserToggle(0);
    setUser1(0);
    setUser2(0);
  }
  function modeO() {
    setMode(2);
  }
  function toggleIconSelect() {
    if (userToggle === 1) {
      setUserToggle(0);
      setUser1(0);
      setUser2(0);
      reset();
      setgameEnd(true);
    } else {
      setUserToggle(1);
    }
  }

  return (
    <>
      <div className="h-[70px] w-full bg-[#05161a] flex justify-between items-center">
        {sidebar === false ? (
          <RxHamburgerMenu
            onClick={() => toggleSidebar()}
            className="text-[20px] lg:text-[30px] text-white ml-[25px] cursor-pointer z-[3]"
          />
        ) : (
          <RxCross2
            onClick={() => toggleSidebar()}
            className="text-[20px] lg:text-[30px] text-white ml-[25px] cursor-pointer z-[3]"
          />
        )}
        <div className="flex">
          <MdAccountCircle className="text-[20px] lg:text-[30px] text-white ml-[25px] cursor-pointer z-[3]" />
          <MdDarkMode className="text-[20px] lg:text-[30px] text-white ml-[25px] cursor-pointer z-[3]" />
          <PiSunDimFill className="text-[20px] lg:text-[30px] text-white ml-[25px] mr-[25px] cursor-pointer z-[3]" />
        </div>
      </div>
      {sidebar === false ? (
        <div className="w-0 h-[100vh] bg-[#072e33] fixed transition-[.5s] ease-in-out mt-[-70px] z-[1]"></div>
      ) : (
        <div className="w-[250px] h-[100vh] bg-[#072e33] fixed transition-[.5s] ease-in-out mt-[-70px] z-[1]"></div>
      )}
      <div
        className="w-full  bg-[#05161a]"
        style={{ height: "calc(100vh - 70px)" }}
      >
        <div className="font-['squidgame'] pt-[45px] flex flex-col items-center justify-center">
          <span className="text-[40px]  lg:text-[80px]  text-[#0f9690] h-[48px] drop-shadow-[2px_2px_3px_#0c7075] font-['squidgame']">
            welcome to
          </span>
          <span className="lg:text-[50px] sm:text-[40px] text-[#ffffff] drop-shadow-[2px_2px_3px_#0c7075] font-['squidgame'] h-[40px] mt-[-34px] lg:mt-[-24px] tracking-[7px]  lg:tracking-[10px]  ">
            tic tac toe
          </span>
        </div>

        <div className="font-['squidgame'] pt-[45px] flex flex-col items-center justify-center">
          <span className="text-[#0f9690] drop-shadow-[2px_2px_3px_#0c7075] text-[20px] lg:text-[23px]">
            game mode
          </span>
          <span className="text-white">
            <span
              onClick={() => modeF()}
              className="w-[85px] mx-[10px] cursor-pointer flex flex-col items-center drop-shadow-[2px_2px_3px_#0c7075] text-[14px] lg:text-[16px]"
            >
              friend
              {mode === 1 ? (
                <span
                  style={{ transition: ".4s" }}
                  className="w-[40px] border-b-[2px] border-[#0f9690] "
                ></span>
              ) : (
                <span
                  style={{ transition: ".4s" }}
                  className="w-0 border-b-[2px] border-[#0f9690] "
                ></span>
              )}
            </span>
            <span
              onClick={() => modeO()}
              className="w-[85px] mx-10px cursor-pointer text-[14px] lg:text-[16px] flex flex-col items-center drop-shadow-[2px_2px_3px_#0c7075]"
            >
              online
              {mode === 2 ? (
                <span
                  className="w-[40px] border-b-[2px] border-[#0f9690] "
                  style={{ transition: ".4s" }}
                ></span>
              ) : (
                <span
                  className="w-0 border-b-[2px] border-[#0f9690] "
                  style={{ transition: ".4s" }}
                ></span>
              )}
            </span>
          </span>
        </div>

        {mode === 1 ? (
          <div className="font-['squidgame']  flex flex-col items-center justify-center pt-[20px]">
            <span className=" h-[30px] text-white font-['squidgame'] flex justify-center items-center">
              {userToggle === 0 ? (
                <></>
              ) : userToggle === 1 ? (
                <span className="font-['squidgame'] w-[198px] flex justify-end items-center pr-[10px] lg:pr-[20px] text-[#0f9690] text-[14px] lg:text-[16px]">
                  user 1 :{" "}
                  {user1 === 0 ? (
                    <>
                      {user2 === 1 ? (
                        <RiTriangleLine className="text[18px] mx-[5px]  ml-[10px] text-[#888888] cursor-default" />
                      ) : (
                        <RiTriangleLine
                          className="text[18px] mx-[5px] cursor-pointer text-white ml-[10px]"
                          onClick={() => User1(1)}
                        />
                      )}{" "}
                      {user2 === 2 ? (
                        <FaRegCircle className="text[18px] mx-[5px]   text-[#888888] cursor-default" />
                      ) : (
                        <FaRegCircle
                          className="text[18px] mx-[5px] cursor-pointer text-white"
                          onClick={() => User1(2)}
                        />
                      )}{" "}
                      {user2 === 3 ? (
                        <BiSquare className="text[18px] mx-[5px]   text-[#888888] cursor-default" />
                      ) : (
                        <BiSquare
                          className="text[18px] mx-[5px] cursor-pointer text-white"
                          onClick={() => User1(3)}
                        />
                      )}
                    </>
                  ) : user1 === 1 ? (
                    <>
                      <RiTriangleLine
                        className="text[18px] mx-[5px] cursor-pointer text-white"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                      <FaRegCircle className="text[18px] mx-[5px]   text-[#888888] cursor-default" />{" "}
                      <BiSquare className="text[18px] mx-[5px]   text-[#888888] cursor-default" />
                    </>
                  ) : user1 === 2 ? (
                    <>
                      <RiTriangleLine className="text[18px] mx-[5px]  ml-[10px] text-[#888888] cursor-default" />{" "}
                      <FaRegCircle className="text[18px] mx-[5px] cursor-pointer text-white" />{" "}
                      <BiSquare className="text[18px] mx-[5px]    text-[#888888] cursor-default" />
                    </>
                  ) : (
                    <>
                      <RiTriangleLine className="text[18px] mx-[5px] ml-[10px] text-[#888888] cursor-default" />{" "}
                      <FaRegCircle className="text[18px] mx-[5px]  text-[#888888] cursor-default" />{" "}
                      <BiSquare
                        className="text[18px] mx-[5px] cursor-pointer text-white"
                        onClick={() => User1(3)}
                      />
                    </>
                  )}
                </span>
              ) : (
                <></>
              )}
              <GiSelect
                className="text-[#0f9690] cursor-pointer "
                onClick={() => toggleIconSelect()}
              />
              {userToggle === 0 ? (
                <>
                  {/* <span
                  className="usertwo"
                  style={{ width: "0px", transition: ".4s" }}
                ></span> */}
                </>
              ) : userToggle === 1 ? (
                <span
                  className="font-['squidgame'] w-[198px] flex justify-start items-center pl-[10px] lg:pl-[20px] text-[#0f9690] text-[14px] lg:text-[16px] "
                  style={{
                    transition: ".4s",
                  }}
                >
                  {user2 === 0 ? (
                    <>
                      {user1 === 3 ? (
                        <BiSquare className="text[18px] mx-[5px]  text-[#888888] cursor-default" />
                      ) : (
                        <BiSquare
                          className="text[18px] mx-[5px] cursor-pointer text-white"
                          onClick={() => User2(3)}
                        />
                      )}{" "}
                      {user1 === 2 ? (
                        <FaRegCircle className="text[18px] mx-[5px]  text-[#888888] cursor-default" />
                      ) : (
                        <FaRegCircle
                          className="text[18px] mx-[5px] cursor-pointer text-white"
                          onClick={() => User2(2)}
                        />
                      )}{" "}
                      {user1 === 1 ? (
                        <RiTriangleLine className="text[18px] mx-[5px]   mr-[10px] text-[#888888] cursor-default" />
                      ) : (
                        <RiTriangleLine
                          className="text[18px] mx-[5px] cursor-pointer text-white mr-[10px]"
                          onClick={() => User2(1)}
                        />
                      )}
                    </>
                  ) : user2 === 1 ? (
                    <>
                      <BiSquare className="text[18px] mx-[5px]    text-[#888888] cursor-default" />{" "}
                      <FaRegCircle className="text[18px] mx-[5px]   text-[#888888] cursor-default" />{" "}
                      <RiTriangleLine
                        className="text[18px] mx-[5px] cursor-pointer text-white mr-[10px]"
                        onClick={() => User2(1)}
                      />
                    </>
                  ) : user2 === 2 ? (
                    <>
                      <BiSquare className="text[18px] mx-[5px]   text-[#888888] cursor-default" />{" "}
                      <FaRegCircle
                        className="text[18px] mx-[5px] cursor-pointer text-white"
                        onClick={() => User2(2)}
                      />{" "}
                      <RiTriangleLine className="text[18px] mx-[5px]   mr-[10px] text-[#888888] cursor-default" />
                    </>
                  ) : (
                    <>
                      <BiSquare
                        className="text[18px] mx-[5px] cursor-pointer text-white"
                        onClick={() => User2(3)}
                      />{" "}
                      <FaRegCircle className="text[18px]  text[18px] mx-[5px] text-[#888888] cursor-default" />{" "}
                      <RiTriangleLine className="text[18px] mx-[5px]   text-[#888888] cursor-default" />
                    </>
                  )}
                  {/* ----------------------- */} : user 2
                </span>
              ) : (
                <></>
              )}
            </span>
          </div>
        ) : (
          <div
            className="font-['squidgame'] pt-[45px] flex flex-col items-center justify-center"
            style={{ paddingTop: "20px" }}
          >
            <div className="font-['squidgame'] h-[30px] text-red-400">
              in development process
            </div>
          </div>
        )}

        {user1 !== 0 && user2 !== 0 && mode === 1 ? (
          <>
            <div className="font-['squidgame'] flex justify-center items-center text-white mt-[60px]">
              <div className="text-white w-[122px] flex justify-end items-center text-[14px] lg:text-[16px]">
                user 1
                {/* {user1 === 1 ? (
              <RiTriangleLine />
            ) : user1 === 2 ? (
              <FaRegCircle />
            ) : (
              <BiSquare />
            )} */}
                {gameUserToggle === 1 ? (
                  <div
                    className="w-[10px] h-[10px] border-[2px] border-[#0f9690] rounded-full mx-[10px] lg:mx[15px] bg-[#0cfff4] shadow-[0px 0px 8px #0c7075]"
                    style={{ transition: ".5s" }}
                  ></div>
                ) : (
                  <div
                    className="w-[10px] h-[10px] border-[2px] border-[#0f9690] rounded-full mx-[10px] lg:mx[15px] shadow-[0px 0px 8px #0c7075]"
                    style={{ transition: ".5s" }}
                  ></div>
                )}
              </div>
              <div className="">
                <div className="flex justify-center items-center">
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box1"
                    onClick={() => toggle1()}
                  >
                    {box1 === 0 ? (
                      <></>
                    ) : box1 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box2"
                    onClick={() => toggle2()}
                  >
                    {box2 === 0 ? (
                      <></>
                    ) : box2 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box3"
                    onClick={() => toggle3()}
                  >
                    {box3 === 0 ? (
                      <></>
                    ) : box3 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box4"
                    onClick={() => toggle4()}
                  >
                    {box4 === 0 ? (
                      <></>
                    ) : box4 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box5"
                    onClick={() => toggle5()}
                  >
                    {box5 === 0 ? (
                      <></>
                    ) : box5 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box6"
                    onClick={() => toggle6()}
                  >
                    {box6 === 0 ? (
                      <></>
                    ) : box6 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box7"
                    onClick={() => toggle7()}
                  >
                    {box7 === 0 ? (
                      <></>
                    ) : box7 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box8"
                    onClick={() => toggle8()}
                  >
                    {box8 === 0 ? (
                      <></>
                    ) : box8 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                  <div
                    className="border-[3px] border-[#0f9690] rounded-full m-[4px] w-[50px] h-[50px] bg-transparent shadow-[0px 0px 8px #0c7075] flex justify-center items-center text-white cursor-pointer font-['squidgame']"
                    id="box9"
                    onClick={() => toggle9()}
                  >
                    {box9 === 0 ? (
                      <></>
                    ) : box9 === 1 ? (
                      user1 === 1 ? (
                        <span>
                          <RiTriangleLine />
                        </span>
                      ) : user1 === 2 ? (
                        <span>
                          <FaRegCircle />
                        </span>
                      ) : (
                        <span>
                          <BiSquare />
                        </span>
                      )
                    ) : user2 === 1 ? (
                      <span>
                        <RiTriangleLine />
                      </span>
                    ) : user2 === 2 ? (
                      <span>
                        <FaRegCircle />
                      </span>
                    ) : (
                      <span>
                        <BiSquare />
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-white w-[122px] flex justify-start items-center text-[14px] lg:text-[16px]">
                {gameUserToggle === 2 ? (
                  <div
                    className="w-[10px] h-[10px] border-[2px] border-[#0f9690] rounded-full mx-[10px] lg:mx[15px] bg-[#0cfff4] shadow-[0px 0px 8px #0c7075]"
                    style={{ transition: ".5s" }}
                  ></div>
                ) : (
                  <div
                    className="w-[10px] h-[10px] border-[2px] border-[#0f9690] rounded-full mx-[10px] lg:mx[15px]  shadow-[0px 0px 8px #0c7075]"
                    style={{ transition: ".5s" }}
                  ></div>
                )}
                user 2
              </div>
            </div>

            <div>
              {gameEnd === true && stepFlag <= 8 ? (
                <>
                  <p className="text-[white] mt-[-3px] h-[80px]"></p>
                </>
              ) : gameEnd === true && stepFlag > 8 ? (
                <p className="text-[white] mt-[-3px] h-[80px]">
                  <span className="text-[50px] lg:text-[55px] text-[#0f9690] drop-shadow-[2px_2px_3px_#0c7075]">
                    draw
                  </span>{" "}
                  <span className="text-[20px] mt-[-52px] lg:mt-[-57px] z-[1] tracking-[-1px] text-white drop-shadow-[2px_2px_3px_#0c7075]">
                    user 1 &nbsp; user 2
                  </span>
                </p>
              ) : winner === 0 ? (
                <>
                  <p className="text-[white] mt-[-3px] h-[80px]"></p>
                </>
              ) : winner === 1 ? (
                <p className="text-[white] mt-[-3px] h-[80px]">
                  <span className="text-[50px] lg:text-[55px] text-[#0f9690] drop-shadow-[2px_2px_3px_#0c7075]">
                    won
                  </span>{" "}
                  <span className="text-[20px] mt-[-52px] lg:mt-[-57px] z-[1] tracking-[-1px] text-white drop-shadow-[2px_2px_3px_#0c7075]">
                    user 1
                  </span>
                </p>
              ) : (
                <p className="text-[white] mt-[-3px] h-[80px]">
                  <span className="text-[50px] lg:text-[55px] text-[#0f9690] drop-shadow-[2px_2px_3px_#0c7075]">
                    won
                  </span>{" "}
                  <span className="text-[20px] mt-[-52px] lg:mt-[-57px] z-[1] tracking-[-1px] text-white drop-shadow-[2px_2px_3px_#0c7075]">
                    user 2
                  </span>
                </p>
              )}
            </div>
            <div className="flex justify-center items-center w-full mt-[25px]">
              {gameEnd === true ? (
                <button
                  className="font-['squidgame'] w-[180px] h-[45px] border-[3px] border-[#0f9690] bg-white text-[black] cursor-pointer hover:bg-[#0f9690] hover:text-[white] "
                  style={{ transition: ".4s" }}
                  onClick={() => reset()}
                >
                  restart
                </button>
              ) : (
                <button
                  className="font-['squidgame'] w-[180px] h-[45px] border-[3px] border-[#0f9690] bg-white text-[black] cursor-pointer  "
                  style={{ transition: ".4s" }}
                  onClick={() => {
                    reset();
                    setgameEnd(true);
                  }}
                >
                  play again
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="font-['squidgame'] flex justify-center items-center text-white mt-[60px]"></div>
        )}

        <div className="flex justify-center items-center w-full mt-[25px]">
          <BiLogoInstagram className="text-[white] text-[25px] lg:text-[30px] mx-[10px]" />
          <BiLogoFacebookSquare className="text-[white] text-[24px] lg:text-[28px] mx-[10px]" />
          <FaTwitterSquare className="text-[white] text-[22px] lg:text-[26px] mx-[10px]" />
          {/* <FaSquareXTwitter /> */}
        </div>
      </div>

      {/* <div
        className=""
        style={{
          width: "300px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      ></div> */}
    </>
  );
};

export default TicTacToe;
