import React from "react";
import twitterLogo from "../../../images/logo/twitter-logo.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            style={{ width: "30px", height: "25px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAoJQTFRFAAAA8HVr7FNG600/60s97FBD60s9605A7FJF7mNX/e/u7WBV7FBD60k76kY46kM16kU36kc660s+61BD+MzJ7mVZ7FBD6kc56kQ2600/7VlM9a2o72tf60k76kQ2601A/Ono7mhc60s97VlN7mJW60g66kI060k760o87FRG7FJF6kQ2605A7VZJ8YF38oqC7FZJ60o86kQ27FNG7mhS60g560c57FdJ86Oe/Ono7VZJ7VtO+7wi8ngi6kY08od9/c5S+74P+rcI84Ud7E0y7FVH+8Ih+70K+7wF+7sG+KUP72Qq601A8peS+8AW+rYI9ZU6Zpz0W5bzXZfzcKTz+78T/dNlT431QoX0R4j0YZrz+8Eb+74ORYfzT47y+8Ea+74QQ4b0RYjy+78T/dVwR4j0XZbz+8AW9bwHvr9EVZD1SIn0Rof0Roj0XZfz+8Ee+70J+rwF4LoQfLA4Ra5ddqX2a572To30R4n0irTx/MpD+74O9rwHsrUiTqtKNKhTNqlVTrNqap/yRIb0T43z/vPa+sIfoLMqPKlQO6tZltKnTYzzRIb0WpXzbrZdPKpVO6xaU7VuYJnyTYz0Q4b0Roj0X5nxhsaVQa5eNalUQa5eWLhyqti0csKISbFmPqhuPZG+QoX0UI7zUbVsOKpWOqtYOapXPataOqtZNalUOZ2KQYftTIz0cKPzWbl0OKpXN595QYjoR4j0VJHxcsKJUrZuOapYPKGCa5/0pcX1SbFlQa5eNqlVNahUPKxbQ69hX7t5SbFlQK5eOqpYNalUNahUOapXOKpXS7Jnar+CecKLV7dxQq5fPaxbPKtZQq5fQa1ePKxaPaxbQa5eU7VtZb5+RIVRfwAAANZ0Uk5TAChwqMTgyK52KAAyiM/1//fRjjICEIXt7YwSAS65/7UDLt5eELn///9+iP2/WCgiUbL7fjLt61cCAUdTjP//NijP////V3D1/////78CqP9bn6CFG8Uq///jR+D/72Dg/+9gyCLtW67/Ud/f8+BBePj///+xICDHyRgw1f/////7Rib3lgKb///fG6b+UTzz3UASlf/XGAKa96E8DCJ24//9bRjL/+Dg9////70OQuz//+YvA0LR0UADGqT396YaBEip4f3+5apQBgREkMjj///nzphMBh8RGhwAAAGOSURBVHicY2AgFjAyMbOwsrKxc3BiynFx8/Dy8YOBgKCQsAiqrKiYOD8SkJCUQpKUlpGV40cF8goIaUUlfnSgjJBVUYUJqqlrqIEZmkiu0oKYrK2jq8fAoG9gaMRvjGSziSlY1szcAsK3tLJGdrWNrR1I1h57aDg4Ojm78Gu74ggsN3cPTy9vH18c0n4eQOAfAOUFBiFAcAhQIBQk7REGlQ6PQIDIKKBANEg2hgGLdGwcUCAeJJ2ATToxCSiQDDY8BYt0ahpQIB0km5EJlc7KBoMckHRuHlAgv8CjsKi4BCpdWgYG5SDpikqgQFV1TW1dfUMjsmebmkHSLSBma1t7R319fWcXknQ3SLanF8zu668HgQkTYZKTJk8BSU+dBuZNnwGWrp85a/YcIHfuvPkLQLILF0FVL15SDwVLly1fsRJIr1odEbFmLcy0devr0cCGjZs2w12yZes2dPntO3YiOXXX7j3Iknv37UeN1gMHDx0+ApE7euz4iZMM6ODU6TNnz52/cPHS5StXMSRxAACDU6tiDVMy9QAAAABJRU5ErkJggg=="
            alt="google-login"
          />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            style={{ width: "30px", height: "25px" }}
            src="https://genius-car-services-6b155.web.app/static/media/facebook.3cb08c9d44e0707a25e4.png"
            alt="google-login"
          />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            style={{ width: "30px", height: "25px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAjFQTFRFAAAAUlBQMS8vIR8fIiEhMzExU1FRVVNTLi0tJyYmHRsbGhgYGBYWGBcXGhgYHBsbKCYmLiwsamhoOzo6IB4eGhgYFxUVFxUVGhgYIB8fPTs7MC4uJyUlGxkZHBoaKCYmMzExIiEhGBYWGRcXIyEhMS8vGhgYGBYWIB4eGxkZGxkZIR8fGxkZNDIyPz09HRsbHRsbQD4+JSMjHhwcHx0dIR8fIR8fHx0dHhwcJyUlREJCHBoaHhwcPz09KykpGBYWGxkZGxkZGRcXLCoqXFpaIB4eHhwcHRsbIR8ff35+KScnGhgYFxUVIiEhIiAgLSsrJyUlKykpGhgYGRcXJSMjIyEhGxkZWFdXQkBAGxkZJSMjHRsbGhgYOjg4Ly4uHhwcKCYmGRcXJyUlJiQkGRcXKSgoJiQkGRcXIyEhIiAgGhgYJyUlPDo6HBoaGhgYKCYmf35+YV9fJiUlGRcXHBoaRkREJyUlGxkZIiAgGhgYGRgYIyEhKigoTUtLxcTEmZiYQD4+KScnJCIiGRcXKScnLiwsGxkZKCYmMTAwJCIipqWlcG9vIiAgGxkZLiwsJiQkGBYWLCoqLiwsHRsbHhwcMC4uKScnGBYWKCYmfn19IB4eHBoaREJCT05OSUdHTEpKMS8vIR8fyMjINjQ0GBYWGxkZHRsbQ0JCOzo6IR8fOzk5a2pqKCYmQkFBOjg4GxkZKCYmd3Z2MjExJSMjGxkZQ0FBOTc3GxkZMC4uRUND7e3t1s9RKAAAALt0Uk5TAAUXHx8WBQEcbcvj6+viyGcZARGV5/7/5I4NAkrf2UECT/TxRh/o/rnq5rviGAa01QVeq4RvcIWsWATiqgQ/+MLP9DQEtdjlpwIj7/1daRw/I+79NFfZDRTgSlndERhMTPAlLPY/LvhndPMnDNLtMwEBO/LICHHluPbreyYKAAALKYbuYBTafHp9AAGJ0g9P+2GU3N4vSvpEAZzMHh4qAzuQABL83K8lP5IPAVEzQNhKABd40B8pzhMIADY659MAAAFwSURBVHicvZDVVsNAFEUHd4dc3Glxd3d3dyju7u7uTnF3d76OSVYKU+AVzkNy9t0rN5Mg9F8RERUTl5D83UlJy8jKySsoKimrqP60auoaFDChNLW0v0kdXT0gom9gKKSNjEEoJqakNeMA19xC4CytAKxtvqytHYA9cnB0cnZxdXP38EReAN4+n9rXD8Cf3BYAEBgkgOAQvDGU1GF4EB7BQmQUQHQMqWPxN3LiWIgHApgkJAIkJbOQgnVqGqnTM/Aok4Us3LNzSJ2riUd5LOTjzisgdWERHhWzUFKKoYzU5XhQUclCVTWmmto6gaxvaMSDpmYBt1Ctbe0dnV3dPQj19vUPDGIbPfS5a3iENzrGBd74BEKTU43Mj5+e+XrX7Nzc/MLi0jLdVxi7ukYcZZ0PG5tb2zt036Utd2+fPOoB//Do+PiErqf0s2fnSCgXl0cUXNHtGqib2zv0PfcPj0/0/fml5fWHpPPGXN+bf5V/kA/xc1WI5J5toQAAAABJRU5ErkJggg=="
            alt="google-login"
          />
          <span className="px-2">Github Sign In</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img
            style={{ width: "30px", height: "25px" }}
            src={twitterLogo}
            // src="https://i.ibb.co/1834J2B/twitter-logo.png"
            alt="google-login"
          />
          <span className="px-2">Twitter Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
