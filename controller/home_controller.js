// 여기엔 모든 함수를 작성해둔다.

import User from "../models/User"

export const handle_home = (req, res) => {
    res.send("Hello Jonas");
}

// export const log_in = (req, res) => {
//     res.send("Log In");
// }

// export const join = (req, res) => {
//     res.send("Join");
// }

// export const log_out = (req, res) => {
//     res.send("Log out");
// }

export const handle_post_join = async (req, res) => {
    const user_id = req.body.getID;
    const user_pw = req.body.getPW;
    // const user_ph = req.body.getPH;

    const all_user = await User.find();

    // const ph_re = new RegExp("/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/");

    // if (user_ph.match(ph_re) === null) {
    //     res.send("Please meet this condition : 000-0000-0000");
    // }

    if (user_id.length > 20) {
        res.send("Please enter less than 20 characters");
    }
    
    for (let i = 1; i < all_user.length; i++) {
        if(user_id === all_user[i]["id"]) {
            res.send("Your ID is a duplicate value");
        }
    }

    const newUser = await User.create({
        id: user_id,
        pw: user_pw,
        // ph: user_ph,
    });
    res.send("Sign up successfully.");
}

