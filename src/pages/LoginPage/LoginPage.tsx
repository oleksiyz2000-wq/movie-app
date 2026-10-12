import './LoginPage.css'

import { AuthLayout } from "../../shared/AuthComponents/AuthLayout"
import { AuthHeader} from "../../shared/AuthComponents/AuthHeader"
import { AuthFooter } from "../../shared/AuthComponents/AuthFooter"

export default function LoginPage() {
  return (
    <>
      <main className="reg-page__main">
        <div className='registration-main'>
          <AuthHeader AuthText={"Login to your account"} />
          <div className='auth-main'>
            <AuthLayout
              content={"Email"}
            />
            <AuthLayout
              content={"Password"}
            />
          </div>
          <AuthFooter
            AuthButtonText={"Login"}
            AuthNavText={"Don't have an account?"}
            AuthNavSubtext={"Sign up"}
          >
            <h4 className='auth__forgot-password'>Forgot password</h4>
          </AuthFooter>
        </div>
      </main>
    </>
  );
}