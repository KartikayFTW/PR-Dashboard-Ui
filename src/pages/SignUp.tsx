import Input from "components/Input";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-red-500">
        <div className="flex flex-col bg-white w-full h-1/3 justify-center border rounded"> 
          <h2 className="p-5">Registration Form</h2>
          <form className="rounded shadow-md p-2">
            <label>
              Client Type
              <Input
                type="text"
                name="clientType"
              />
            </label>

            <label>
              Company Name
              <Input
                type="text"
                name="companyName"
                
              />
            </label>

            <label>
              Client Name
              <Input
                type="text"
                name="clientName"
                
              />
            </label>

            <label>
              Mobile No 1
              <Input type="text" name="mobile1"  />
            </label>

            <label>
              Mobile No 2
              <Input type="text" name="mobile2"  />
            </label>

            <label>
              Email
              <Input type="email" name="email"  />
            </label>

            <label>
              Address
              <textarea name="address"  />
            </label>

            <label>
              State
              <Input type="text" name="state"  />
            </label>

            <label>
              City
              <Input type="text" name="city"  />
            </label>

            <label>
              Pin Code
              <Input
                type="number"
                name="pinCode"
                
              />
            </label>

            <label>
              Website/URL
              <Input
                type="text"
                name="websiteURL"
                
              />
            </label>

            <label>
              Username
              <Input
                type="text"
                name="username"
                
              />
            </label>

            <label>
              Password
              <Input
                type="password"
                name="password"
                
              />
            </label>

            <label>
              Confirm Password
              <Input
                type="password"
                name="confirmPassword"
                
              />
            </label>

            <label>
              Profile Image
              <Input
                type="text"
                name="profileImage"
                
              />
            </label>

            <label>
              Business Logo
              <Input
                type="text"
                name="businessLogo"
                
              />
            </label>
          </form>
        </div>

        <div className="flex flex-col w-full bg-white h-1/3 justify-center border rounded">
          <h3 className="p-5">Proof Details</h3>
          <div>
            <form className="bg-white rounded shadow-md p-2">
              <label>
                GST No
                <Input
                  type="number"
                  name="gstNo"
                  
                />
              </label>

              <label>
                GST Image
                <Input
                  type="number"
                  name="gstImage"
                  
                />
              </label>

              <label>
                Pan Number
                <Input
                  type="number"
                  name="panNumber"
                  
                />
              </label>

              <label>
                Pan Image
                <Input
                  type="number"
                  name="panImage"
                  
                />
              </label>
            </form>
          </div>
        </div>

        <div className="flex justify-center bg-white w-full h-1/3 flex-col border rounded">
          <h2 className="p-5">Bank Details</h2>
          <form className="bg-white rounded shadow-md p-2">
            <label>
              IFSC Code
              <Input
                type="number"
                name="IFSC Code"
                
              />
            </label>

            <label>
              Bank Name
              <Input
                type="text"
                name="Bank Name"
                
              />
            </label>

            <label>
              MICR Code
              <Input
                type="number"
                name="MICR Code"
                
              />
            </label>

            <label>
              Branch Code
              <Input
                type="number"
                name="Branch Code"
                
              />
            </label>

            <label>
              Authorized Name
              <Input
                type="text"
                name="Auth name"
                
              />
            </label>

            <label>
              State Name
              <Input type="text" name="state"  />
            </label>

            <label>
              City Name
              <Input
                type="text"
                name="city name"
              />
            </label>

            <label>
              District Name
              <Input
                type="text"
                name="district name"
              />
            </label>

            <label>
              Account No
              <Input
                type="number"
                name="account no"
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
