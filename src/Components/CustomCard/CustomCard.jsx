{
  /*
import React from "react";
import "./CustomCard.scss";
import codeIcon from "../../assets/images/codeIcon.png";
import graphIcon from "../../assets/images/graphIcon.png";

function CustomCard(props) {
  const chipDetails = [
    {
      id: 1,
      name: "FRONTEND",
    },
    {
      id: 2,
      name: "BACKEND",
    },
    {
      id: 3,
      name: "FULLSTACK",
    },
    {
      id: 4,
      name: "DEVOPS",
    },
    {
      id: 5,
      name: "FULLSTACK",
    },
    {
      id: 6,
      name: "DEVOPS",
    },
  ];

  return (
    <div className="Custom_Card_Wrapper">
      <div className="row">
        <div className="col-lg-4">
          <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
            <div className="cardWrapper ">
              <div className="cardBody d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="cardTitle">User Authentication</h5>
                  <div className="chipWrapper d-flex align-items-center gap-2">
                    <div className="chip d-flex align-items-center gap-2">
                      <div className="imgWrapper d-flex justify-content-center align-items-center">
                        <img src={codeIcon} alt="CodeSymbol" />
                      </div>
                      <span>FRONTEND</span>
                    </div>
                    <div className="chip d-flex align-items-center gap-2">
                      <div className="imgWrapper d-flex justify-content-center align-items-center">
                        <img src={codeIcon} alt="CodeSymbol" />
                      </div>
                      <span>BACKEND</span>
                    </div>
                  </div>
                </div>
                <div className="graphIconWrapper">
                  <img src={graphIcon} alt="GraphSymbol" />
                </div>
              </div>
              <div className="cardFooter d-flex justify-content-between align-items-center">
                <span>Similar to a past project</span>
                <button type="button">VIEW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
            <div className="cardWrapper ">
              <div className="cardBody d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="cardTitle">User Authentication</h5>
                  <div className="chipWrapper d-flex align-items-center gap-2">
                    <div className="chip d-flex align-items-center gap-2">
                      <div className="imgWrapper d-flex justify-content-center align-items-center">
                        <img src={codeIcon} alt="CodeSymbol" />
                      </div>
                      <span>FRONTEND</span>
                    </div>
                    <div className="chip d-flex align-items-center gap-2">
                      <div className="imgWrapper d-flex justify-content-center align-items-center">
                        <img src={codeIcon} alt="CodeSymbol" />
                      </div>
                      <span>BACKEND</span>
                    </div>
                  </div>
                </div>
                <div className="graphIconWrapper">
                  <img src={graphIcon} alt="GraphSymbol" />
                </div>
              </div>
            </div>
            <div className="cardWrapper mt-5">
              <div className="cardBody d-flex justify-content-between align-items-center gap-3">
                <div>
                  <h5 className="cardTitle">User Authentication</h5>
                  {chipDetails?.length > 2 && (
                    <div className="chipWrapper hideChipContainer">
                      <div className="chip d-flex align-items-center gap-2">
                        <div className="imgWrapper d-flex justify-content-center align-items-center">
                          <img src={codeIcon} alt="CodeSymbol" />
                        </div>
                        <span>
                          {chipDetails?.[0]?.name} + {chipDetails?.length - 1}{" "}
                          others
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="chipWrapper showChipContainer">
                    {chipDetails?.map((item) => {
                      return (
                        <div
                          className="chip d-flex align-items-center gap-2"
                          key={item?.id}
                        >
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>{item?.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="graphIconWrapper">
                  <img src={graphIcon} alt="GraphSymbol" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
            <div className="cardWrapper ">
              <div className="cardBody d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="cardTitle">User Authentication</h5>
                  <div className="chipWrapper d-flex align-items-center gap-2">
                    <div className="chip d-flex align-items-center gap-2">
                      <div className="imgWrapper d-flex justify-content-center align-items-center">
                        <img src={codeIcon} alt="CodeSymbol" />
                      </div>
                      <span>FRONTEND</span>
                    </div>
                    <div className="chip d-flex align-items-center gap-2">
                      <div className="imgWrapper d-flex justify-content-center align-items-center">
                        <img src={codeIcon} alt="CodeSymbol" />
                      </div>
                      <span>BACKEND</span>
                    </div>
                  </div>
                </div>
                <div className="graphIconWrapper">
                  <img src={graphIcon} alt="GraphSymbol" />
                </div>
              </div>
            </div>
            <div className="cardWrapper my-5">
              <div className="cardBody d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="cardTitle">User Authentication</h5>
                  <div className="chipWrapper d-flex align-items-center gap-2">
                    <div className="chip d-flex align-items-center gap-2">
                      <div className="imgWrapper d-flex justify-content-center align-items-center">
                        <img src={codeIcon} alt="CodeSymbol" />
                      </div>
                      <span>FRONTEND</span>
                    </div>
                    <div className="chip d-flex align-items-center gap-2">
                      <div className="imgWrapper d-flex justify-content-center align-items-center">
                        <img src={codeIcon} alt="CodeSymbol" />
                      </div>
                      <span>BACKEND</span>
                    </div>
                  </div>
                </div>
                <div className="graphIconWrapper">
                  <img src={graphIcon} alt="GraphSymbol" />
                </div>
              </div>
              <div className="cardFooter d-flex justify-content-between align-items-center">
                <span>Similar to a past project</span>
                <button type="button">VIEW</button>
              </div>
            </div>
            <div className="cardWrapper ">
              <div className="cardBody d-flex justify-content-between align-items-center gap-3">
                <div>
                  <h5 className="cardTitle">User Authentication</h5>
                  {chipDetails?.length > 2 && (
                    <div className="chipWrapper hideChipContainer">
                      <div className="chip d-flex align-items-center gap-2">
                        <div className="imgWrapper d-flex justify-content-center align-items-center">
                          <img src={codeIcon} alt="CodeSymbol" />
                        </div>
                        <span>
                          {chipDetails?.[0]?.name} + {chipDetails?.length - 1}{" "}
                          others
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="chipWrapper showChipContainer">
                    {chipDetails?.map((item) => {
                      return (
                        <div
                          className="chip d-flex align-items-center gap-2"
                          key={item?.id}
                        >
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>{item?.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="graphIconWrapper">
                  <img src={graphIcon} alt="GraphSymbol" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
*/
}

import React from "react";
import "./CustomCard.scss";
import codeIcon from "../../assets/images/codeIcon.png";
import graphIcon from "../../assets/images/graphIcon.png";

function CustomCard(props) {
  const chipDetails = [
    {
      id: 1,
      name: "FRONTEND",
    },
    {
      id: 2,
      name: "BACKEND",
    },
    {
      id: 3,
      name: "FULLSTACK",
    },
    {
      id: 4,
      name: "DEVOPS",
    },
    {
      id: 5,
      name: "FULLSTACK",
    },
    {
      id: 6,
      name: "DEVOPS",
    },
  ];

  return (
    <div className="Custom_Card_Wrapper">
      <div className="container">
        <div className="card_box d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-lg-4">
              <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                <div className="cardWrapper">
                  <div className="cardBackIndicator"></div>
                  <div className="lineFrontIndicator">
                    <div className="cardLineIndicator"></div>
                    <div className="cardFrontIndicator"></div>
                  </div>
                  <div className="cardBody d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="cardTitle">User Authentication</h5>
                      <div className="chipWrapper d-flex align-items-center gap-2">
                        <div className="chip d-flex align-items-center gap-2">
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>FRONTEND</span>
                        </div>
                        <div className="chip d-flex align-items-center gap-2">
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>BACKEND</span>
                        </div>
                      </div>
                    </div>
                    <div className="graphIconWrapper">
                      <img src={graphIcon} alt="GraphSymbol" />
                    </div>
                  </div>
                  <div className="cardFooter d-flex justify-content-between align-items-center">
                    <span>Similar to a past project</span>
                    <button type="button">VIEW</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 bg-danger">
              <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                <div className="cardWrapper">
                  <div className="cardBackIndicator"></div>
                  <div className="lineFrontIndicator">
                    <div className="cardLineIndicator"></div>
                    <div className="cardFrontIndicator"></div>
                  </div>
                  <div className="cardBody d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="cardTitle">User Authentication</h5>
                      <div className="chipWrapper d-flex align-items-center gap-2">
                        <div className="chip d-flex align-items-center gap-2">
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>FRONTEND</span>
                        </div>
                        <div className="chip d-flex align-items-center gap-2">
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>BACKEND</span>
                        </div>
                      </div>
                    </div>
                    <div className="graphIconWrapper">
                      <img src={graphIcon} alt="GraphSymbol" />
                    </div>
                  </div>
                </div>
                <div className="cardWrapper mt-5">
                  <div className="lineFrontIndicator">
                    <div className="cardLineIndicator"></div>
                    <div className="cardFrontIndicator"></div>
                  </div>
                  <div className="cardBody d-flex justify-content-between align-items-center gap-3">
                    <div>
                      <h5 className="cardTitle">User Authentication</h5>
                      {chipDetails?.length > 2 && (
                        <div className="chipWrapper hideChipContainer">
                          <div className="chip d-flex align-items-center gap-2">
                            <div className="imgWrapper d-flex justify-content-center align-items-center">
                              <img src={codeIcon} alt="CodeSymbol" />
                            </div>
                            <span>
                              {chipDetails?.[0]?.name} +{" "}
                              {chipDetails?.length - 1} others
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="chipWrapper showChipContainer">
                        {chipDetails?.map((item) => {
                          return (
                            <div
                              className="chip d-flex align-items-center gap-2"
                              key={item?.id}
                            >
                              <div className="imgWrapper d-flex justify-content-center align-items-center">
                                <img src={codeIcon} alt="CodeSymbol" />
                              </div>
                              <span>{item?.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="graphIconWrapper">
                      <img src={graphIcon} alt="GraphSymbol" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                <div className="cardWrapper">
                  <div className="cardBackIndicator"></div>
                  <div className="lineFrontIndicator">
                    <div className="cardLineIndicator"></div>
                    <div className="cardFrontIndicator"></div>
                  </div>
                  <div className="cardBody d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="cardTitle">User Authentication</h5>
                      <div className="chipWrapper d-flex align-items-center gap-2">
                        <div className="chip d-flex align-items-center gap-2">
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>FRONTEND</span>
                        </div>
                        <div className="chip d-flex align-items-center gap-2">
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>BACKEND</span>
                        </div>
                      </div>
                    </div>
                    <div className="graphIconWrapper">
                      <img src={graphIcon} alt="GraphSymbol" />
                    </div>
                  </div>
                </div>
                <div className="cardWrapper my-5">
                  <div className="cardBody d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="cardTitle">User Authentication</h5>
                      <div className="chipWrapper d-flex align-items-center gap-2">
                        <div className="chip d-flex align-items-center gap-2">
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>FRONTEND</span>
                        </div>
                        <div className="chip d-flex align-items-center gap-2">
                          <div className="imgWrapper d-flex justify-content-center align-items-center">
                            <img src={codeIcon} alt="CodeSymbol" />
                          </div>
                          <span>BACKEND</span>
                        </div>
                      </div>
                    </div>
                    <div className="graphIconWrapper">
                      <img src={graphIcon} alt="GraphSymbol" />
                    </div>
                  </div>
                  <div className="cardFooter d-flex justify-content-between align-items-center">
                    <span>Similar to a past project</span>
                    <button type="button">VIEW</button>
                  </div>
                </div>
                <div className="cardWrapper ">
                  <div className="cardBody d-flex justify-content-between align-items-center gap-3">
                    <div>
                      <h5 className="cardTitle">User Authentication</h5>
                      {chipDetails?.length > 2 && (
                        <div className="chipWrapper hideChipContainer">
                          <div className="chip d-flex align-items-center gap-2">
                            <div className="imgWrapper d-flex justify-content-center align-items-center">
                              <img src={codeIcon} alt="CodeSymbol" />
                            </div>
                            <span>
                              {chipDetails?.[0]?.name} +{" "}
                              {chipDetails?.length - 1} others
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="chipWrapper showChipContainer">
                        {chipDetails?.map((item) => {
                          return (
                            <div
                              className="chip d-flex align-items-center gap-2"
                              key={item?.id}
                            >
                              <div className="imgWrapper d-flex justify-content-center align-items-center">
                                <img src={codeIcon} alt="CodeSymbol" />
                              </div>
                              <span>{item?.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="graphIconWrapper">
                      <img src={graphIcon} alt="GraphSymbol" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
