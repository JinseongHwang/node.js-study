// 여기엔 모든 함수를 작성해둔다.

import User from "../models/User"

export const handle_home = (req, res) => {
    res.send("Hello Jinseong 😊");
}

export const handle_post_join = async (req, res) => {
    const user_id = req.body.getID;
    const user_pw = req.body.getPW;
    const user_ph = req.body.getPH;

    const all_user = await User.find();

    const email_re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const pw_re = /^[A-Za-z0-9]{6,12}$/;
    const ph_re = /^\d{3}-\d{3,4}-\d{4}$/;

    // id 유효성 검증
    if (!email_re.test(user_id)) {
        res.send("Please enter ID in e-mail form.");
        return;
    }

    if (user_id.length > 20) {
        res.send("Please enter less than 20 characters.");
        return;
    }
    
    for (let i = 1; i < all_user.length; i++) {
        if(user_id === all_user[i]["id"]) {
            res.send("Your ID is a duplicate value.");
            return;
        }
    }

    // pw 유효성 검증
    if (!pw_re.test(user_pw)) {
        res.send("Your PW should contain 6 ~ 12 mixture of letters and digits.");
        return;
    }

    // phone number 유효성 검증
    if (!ph_re.test(user_ph)) {
        res.send("Please enter Phone Number in this form : 000-0000-0000");
        return;
    }

    const newUser = await User.create({
        id: user_id,
        pw: user_pw,
        ph: user_ph,
    });
    
    res.send("Sign up successfully.");
}