import bg from "../../images/contact-us/contact-us-bg.jpg";
import styles from "./styles";
import muiStyles from "./muiStyle";
import { TextField } from "@mui/material";

const ContactUs = () => {
  const handleSubmit = () => {
    return;
  };

  return (
    <div>
      <div className="w-full h-[495px]">
        <img
          className="w-full h-full object-cover"
          src={bg}
          alt="2 women on the beach"
        />
      </div>
      <div
        className={`w-full ${styles.flexCenter} flex-col gap-[3rem] py-[3rem]`}
      >
        <div className={`w-full ${styles.flexCenter} flex-col`}>
          <span className={`${styles.primaryText}`}>Contact Us</span>
          <span className="w-[897px] text-center text-[15px] mt-[.5rem]">
            A lifetime of rare and inspiring experiences awaits. Our expert
            Reservations Team will help you tailor your dream Soneva holiday.
            Contact us and we will get back to you within 24 hours.
          </span>
        </div>
        <div className={`${styles.flexCenter} w-full`}>
          <form
            className="flex flex-col justify-start gap-4 w-full px-[20rem]"
            onSubmit={handleSubmit}
          >
            <span className={`${styles.secondaryText}`}>Contact Info</span>
            <div className="flex gap-[2rem]">
              <div className={`${styles.flexCenter}`}>
                <TextField
                  inputProps={{ style: muiStyles.prefix }}
                  InputLabelProps={{
                    style: { fontSize: "13px", marginTop: "2px" },
                  }}
                  label="Prefix"
                  variant="outlined"
                  required
                />
                <TextField
                  inputProps={{ style: muiStyles.fistName }}
                  label="First Name"
                  variant="outlined"
                  required
                />
              </div>
              <TextField
                inputProps={{ style: muiStyles.textField }}
                label="Last Name"
                variant="outlined"
                required
                fullWidth
              />
            </div>
            <div className="flex gap-[2rem]">
              <TextField
                inputProps={{ style: muiStyles.textField }}
                label="Mobile phone"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                inputProps={{ style: muiStyles.textField }}
                label="Email Address"
                variant="outlined"
                required
                helperText="This is the Email we will send your confirmation to."
                fullWidth
              />
            </div>

            <div className={`${styles.flexCenter} flex-col gap-2`}>
              <span className={`${styles.secondaryText}`}>Message</span>
              <TextField
                placeholder="Tell us what you whould like to know or let us know if you have any special requests"
                variant="outlined"
                rows="5"
                required
                multiline
                fullWidth
              />
            </div>
            <div className={`${styles.flexCenter}`}>
              <button className={`${styles.button}`} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
