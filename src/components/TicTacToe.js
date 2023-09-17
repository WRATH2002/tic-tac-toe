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
      box1 != 0 &&
      box2 != 0 &&
      box3 != 0 &&
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
      box4 != 0 &&
      box5 != 0 &&
      box6 != 0 &&
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
      box7 != 0 &&
      box8 != 0 &&
      box9 != 0 &&
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
      box1 != 0 &&
      box4 != 0 &&
      box7 != 0 &&
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
      box2 != 0 &&
      box5 != 0 &&
      box8 != 0 &&
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
      box3 != 0 &&
      box6 != 0 &&
      box9 != 0 &&
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
      box1 != 0 &&
      box5 != 0 &&
      box9 != 0 &&
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
      box3 != 0 &&
      box5 != 0 &&
      box7 != 0 &&
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
      <div className="navbar">
        {sidebar === false ? (
          <RxHamburgerMenu
            onClick={() => toggleSidebar()}
            style={{
              fontSize: "30px",
              color: "white",
              marginLeft: "25px",
              cursor: "pointer",
              zIndex: "3",
            }}
          />
        ) : (
          <RxCross2
            onClick={() => toggleSidebar()}
            style={{
              fontSize: "30px",
              color: "white",
              marginLeft: "25px",
              cursor: "pointer",
              zIndex: "3",
            }}
          />
        )}
        <div>
          <MdAccountCircle
            style={{
              fontSize: "30px",
              color: "white",
              marginLeft: "25px",
              cursor: "pointer",
              zIndex: "3",
            }}
          />
          <MdDarkMode
            style={{
              fontSize: "30px",
              color: "white",
              marginLeft: "25px",
              cursor: "pointer",
              zIndex: "3",
            }}
          />
          <PiSunDimFill
            style={{
              fontSize: "30px",
              color: "white",
              marginLeft: "25px",
              marginRight: "25px",
              cursor: "pointer",
              zIndex: "3",
            }}
          />
        </div>
      </div>
      {sidebar === false ? (
        <div
          style={{
            width: "0px",
            height: "100vh",
            backgroundColor: "#072e33",
            position: "fixed",
            transition: ".5s",
            marginTop: "-70px",
            zIndex: "1",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "250px",
            height: "100vh",
            backgroundColor: "#072e33",
            position: "fixed",
            transition: ".5s",
            marginTop: "-70px",
            zIndex: "1",
          }}
        ></div>
      )}
      <div className="body-container">
        <div className="header">
          <span className="header-one">welcome to</span>
          <span className="header-two">tic tac toe</span>
        </div>

        <div className="header">
          <span
            style={{
              color: "white",
              textShadow: "2px 2px 8px #0c7075",
              color: "#0f9690",
              fontSize: "23px",
            }}
          >
            game mode
          </span>
          <span style={{ color: "white" }}>
            <span
              onClick={() => modeF()}
              style={{
                width: "85px",
                margin: "0px 10px ",
                cursor: "pointer",
                fontSize: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textShadow: "2px 2px 8px #0c7075",
              }}
            >
              friend
              {mode === 1 ? (
                <span
                  style={{
                    width: "40px",
                    borderBottom: "2px solid #0f9690",
                    transition: ".4s",
                  }}
                ></span>
              ) : (
                <span
                  style={{
                    width: "0px",
                    borderBottom: "2px solid #0f9690",
                    transition: ".4s",
                  }}
                ></span>
              )}
            </span>
            <span
              onClick={() => modeO()}
              style={{
                width: "85px",
                margin: "0px 10px ",
                cursor: "pointer",
                fontSize: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textShadow: "2px 2px 8px #0c7075",
              }}
            >
              online
              {mode === 2 ? (
                <span
                  style={{
                    width: "40px",
                    borderBottom: "2px solid #0f9690",
                    transition: ".4s",
                  }}
                ></span>
              ) : (
                <span
                  style={{
                    width: "0px",
                    borderBottom: "2px solid #0f9690",
                    transition: ".4s",
                  }}
                ></span>
              )}
            </span>
          </span>
        </div>

        {mode === 1 ? (
          <div className="header" style={{ paddingTop: "20px" }}>
            <span className="iconselect">
              {userToggle === 0 ? (
                <></>
              ) : userToggle === 1 ? (
                <span
                  className="userone"
                  style={{ fontSize: "16px", color: "#0f9690" }}
                >
                  user 1 :{" "}
                  {user1 === 0 ? (
                    <>
                      {user2 === 1 ? (
                        <RiTriangleLine
                          className="selecticon"
                          style={{
                            marginLeft: "10px",
                            color: "#888888",
                            cursor: "default",
                          }}
                        />
                      ) : (
                        <RiTriangleLine
                          className="selecticon"
                          onClick={() => User1(1)}
                          style={{ marginLeft: "10px" }}
                        />
                      )}{" "}
                      {user2 === 2 ? (
                        <FaRegCircle
                          className="selecticon"
                          style={{ color: "#888888", cursor: "default" }}
                        />
                      ) : (
                        <FaRegCircle
                          className="selecticon"
                          onClick={() => User1(2)}
                        />
                      )}{" "}
                      {user2 === 3 ? (
                        <BiSquare
                          className="selecticon"
                          style={{ color: "#888888", cursor: "default" }}
                        />
                      ) : (
                        <BiSquare
                          className="selecticon"
                          onClick={() => User1(3)}
                        />
                      )}
                    </>
                  ) : user1 === 1 ? (
                    <>
                      <RiTriangleLine
                        className="selecticon"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                      <FaRegCircle
                        className="selecticon"
                        style={{ color: "#888888", cursor: "default" }}
                      />{" "}
                      <BiSquare
                        className="selecticon"
                        style={{ color: "#888888", cursor: "default" }}
                      />
                    </>
                  ) : user1 === 2 ? (
                    <>
                      <RiTriangleLine
                        className="selecticon"
                        style={{
                          color: "#888888",
                          cursor: "default",
                          marginLeft: "10px",
                        }}
                      />{" "}
                      <FaRegCircle className="selecticon" />{" "}
                      <BiSquare
                        className="selecticon"
                        style={{ color: "#888888", cursor: "default" }}
                      />
                    </>
                  ) : (
                    <>
                      <RiTriangleLine
                        className="selecticon"
                        style={{
                          color: "#888888",
                          cursor: "default",
                          marginLeft: "10px",
                        }}
                      />{" "}
                      <FaRegCircle
                        className="selecticon"
                        style={{ color: "#888888", cursor: "default" }}
                      />{" "}
                      <BiSquare
                        className="selecticon"
                        onClick={() => User1(3)}
                      />
                    </>
                  )}
                </span>
              ) : (
                <></>
              )}
              <GiSelect
                onClick={() => toggleIconSelect()}
                style={{ color: "#0f9690", cursor: "pointer" }}
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
                  className="usertwo"
                  style={{
                    fontSize: "16px",
                    color: "#0f9690",
                    transition: ".4s",
                  }}
                >
                  {user2 === 0 ? (
                    <>
                      {user1 === 3 ? (
                        <BiSquare
                          className="selecticon"
                          style={{ color: "#888888", cursor: "default" }}
                        />
                      ) : (
                        <BiSquare
                          className="selecticon"
                          onClick={() => User2(3)}
                        />
                      )}{" "}
                      {user1 === 2 ? (
                        <FaRegCircle
                          style={{ color: "#888888", cursor: "default" }}
                          className="selecticon"
                        />
                      ) : (
                        <FaRegCircle
                          className="selecticon"
                          onClick={() => User2(2)}
                        />
                      )}{" "}
                      {user1 === 1 ? (
                        <RiTriangleLine
                          style={{
                            color: "#888888",
                            cursor: "default",
                            marginRight: "10px",
                          }}
                          className="selecticon"
                        />
                      ) : (
                        <RiTriangleLine
                          style={{
                            marginRight: "10px",
                          }}
                          className="selecticon"
                          onClick={() => User2(1)}
                        />
                      )}
                    </>
                  ) : user2 === 1 ? (
                    <>
                      <BiSquare
                        style={{ color: "#888888", cursor: "default" }}
                        className="selecticon"
                      />{" "}
                      <FaRegCircle
                        style={{ color: "#888888", cursor: "default" }}
                        className="selecticon"
                      />{" "}
                      <RiTriangleLine
                        style={{
                          marginRight: "10px",
                        }}
                        className="selecticon"
                        onClick={() => User2(1)}
                      />
                    </>
                  ) : user2 === 2 ? (
                    <>
                      <BiSquare
                        style={{ color: "#888888", cursor: "default" }}
                        className="selecticon"
                      />{" "}
                      <FaRegCircle
                        className="selecticon"
                        onClick={() => User2(2)}
                      />{" "}
                      <RiTriangleLine
                        style={{
                          color: "#888888",
                          cursor: "default",
                          marginRight: "10px",
                        }}
                        className="selecticon"
                      />
                    </>
                  ) : (
                    <>
                      <BiSquare
                        className="selecticon"
                        onClick={() => User2(3)}
                      />{" "}
                      <FaRegCircle
                        style={{ color: "#888888", cursor: "default" }}
                        className="selecticon"
                      />{" "}
                      <RiTriangleLine
                        style={{ color: "#888888", cursor: "default" }}
                        className="selecticon"
                      />
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
          <div className="header" style={{ paddingTop: "20px" }}>
            <div className="iconselect" style={{ color: "red" }}>
              in development process
            </div>
          </div>
        )}

        {user1 != 0 && user2 != 0 && mode === 1 ? (
          <>
            <div className="game-container">
              <div
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  width: "140px",
                  justifyContent: "flex-end",
                }}
              >
                user 1
                {/* {user1 === 1 ? (
              <RiTriangleLine />
            ) : user1 === 2 ? (
              <FaRegCircle />
            ) : (
              <BiSquare />
            )} */}
                {gameUserToggle === 1 ? (
                  <div className="active"></div>
                ) : (
                  <div className="indicator"></div>
                )}
              </div>
              <div className="game-subcontainer">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="box" id="box1" onClick={() => toggle1()}>
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
                  <div className="box" id="box2" onClick={() => toggle2()}>
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
                  <div className="box" id="box3" onClick={() => toggle3()}>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="box" id="box4" onClick={() => toggle4()}>
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
                  <div className="box" id="box5" onClick={() => toggle5()}>
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
                  <div className="box" id="box6" onClick={() => toggle6()}>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="box" id="box7" onClick={() => toggle7()}>
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
                  <div className="box" id="box8" onClick={() => toggle8()}>
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
                  <div className="box" id="box9" onClick={() => toggle9()}>
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
              <div
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  width: "140px",
                  justifyContent: "flex-start",
                }}
              >
                {gameUserToggle === 2 ? (
                  <div className="active"></div>
                ) : (
                  <div className="indicator"></div>
                )}
                user 2
                {/* {user2 === 1 ? (
              <RiTriangleLine />
            ) : user2 === 2 ? (
              <FaRegCircle />
            ) : (
              <BiSquare />
            )} */}
              </div>
            </div>
            {/* <div className="resultcontainer">
              <div
                style={{
                  width: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>user 1 </span>
                <div
                  style={{
                    width: "30px",
                    height: "10px",
                    border: "2px solid #0f9690",
                    borderRadius: "40px",
                    margin: "0px 20px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  border: "2px solid #0f9690",
                  borderRadius: "40px",
                }}
              ></div>
              <div
                style={{
                  width: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "10px",
                    border: "2px solid #0f9690",
                    borderRadius: "40px",
                    margin: "0px 20px",
                  }}
                ></div>
                <span> user 2</span>
              </div>
            </div> */}
            {/* <div>
              {gameEnd === true && stepFlag >= 8 ? (
                <>
                  <p style={{ color: "white" }}>Draw</p>
                </>
              ) : (
                <p style={{ color: "white" }}>Game Won</p>
              )}
            </div> */}
            {/* <div>
              {gameEnd === false ? (<p style={{ color: "white" }}>Draw</p>) : (gameEnd === true && )}
            </div> */}
            <div>
              {gameEnd === true && stepFlag <= 8 ? (
                <>
                  <p
                    style={{
                      color: "white",
                      marginTop: "-3px",
                      height: "80px",
                    }}
                  ></p>
                </>
              ) : gameEnd === true && stepFlag > 8 ? (
                <p
                  style={{ color: "white", marginTop: "-3px", height: "80px" }}
                >
                  <span className="win">draw</span>{" "}
                  <span className="winperson">user 1 &nbsp; user 2</span>
                </p>
              ) : winner === 0 ? (
                <>
                  <p
                    style={{
                      color: "white",
                      marginTop: "-3px",
                      height: "80px",
                    }}
                  ></p>
                </>
              ) : winner === 1 ? (
                <p
                  style={{ color: "white", marginTop: "-3px", height: "80px" }}
                >
                  <span className="win">won</span>{" "}
                  <span className="winperson">user 1</span>
                </p>
              ) : (
                <p
                  style={{ color: "white", marginTop: "-3px", height: "80px" }}
                >
                  <span className="win">won</span>{" "}
                  <span className="winperson">user 2</span>
                </p>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: "25px",
              }}
            >
              {gameEnd === true ? (
                <button onClick={() => reset()}>restart</button>
              ) : (
                <button
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
          <div className="game-container"></div>
        )}
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
