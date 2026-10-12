import './RegistrationPage.css'

import { AuthLayout } from "../../shared/AuthComponents/AuthLayout"
import { AuthHeader} from "../../shared/AuthComponents/AuthHeader"
import { AuthFooter } from "../../shared/AuthComponents/AuthFooter"

export default function RegistrationPage() {
  return (
    <>
      <main className="reg-page__main">
        <div className='registration-main'>
          <AuthHeader AuthText={"Register to enjoy the features"}/>
          <div className='auth-main'>
            <AuthLayout
              content={"Username"}
            />
            <AuthLayout
              content={"Email"}
            />
            <AuthLayout
              content={"Password"}
            />
            <AuthLayout
              content={"Confirm password"}
            />
          </div>
            <AuthFooter
                AuthButtonText={"Create account"}
                AuthNavText={"Already have an account?"}
                AuthNavSubtext={"Login"}
            >
            </AuthFooter>
        </div>
      </main>
    </>
  );
}