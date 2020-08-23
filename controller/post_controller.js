import Post from "../models/Post"

// DATE TYPE ==> YYYY-MM-DD(요일) HH:MM:SS
// const days = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"];
// const today = new Date();
// const year = today.getFullYear().toString(),
//     month = (today.getMonth() + 1 < 10) ? `0${today.getMonth() + 1}` : (today.getMonth() + 1),
//     date = (today.getDate() < 10) ? `0${today.getDate()}` : (today.getDate()),
//     hour = (today.getHours() < 10) ? `0${today.getHours()}` : (today.getHours()),
//     minute = (today.getMinutes() < 10) ? `0${today.getMinutes()}` : (today.getMinutes()),
//     second = (today.getSeconds() < 10) ? `0${today.getSeconds()}` : (today.getSeconds()),
//     day = days[today.getDay()];
// const str_today = `${year}-${month}-${date}${day} ${hour}:${minute}:${second}`;
// console.log(str_today);

export const show_board = async (req, res) => {
    const all_posts = await Post.find();
    const id_arr = [], title_arr = [], date_arr = [];
    for (let i = 0; i < all_posts.length; i++) {
        id_arr.push(all_posts[i]["_id"]);
        title_arr.push(all_posts[i]["title"]);
        date_arr.push(all_posts[i]["date"]);
    }
    const data = [id_arr, title_arr, date_arr];
    res.send(data);
}

export const posting = async (req, res) => {
    const today = new Date();
    today.setHours(today.getHours() + 9); // set KST (== UTC+9)
    const curr_title = req.body.Title;
    const curr_category = req.body.Category;
    const curr_body = req.body.Body;
    // const curr_writer = 
    const curr_time = today;
    
    const newPosting = await Post.create({
        title: curr_title,
        category: curr_category,
        body: curr_body,
        // writer: curr_writer,
        date: curr_time,
    });

    res.send("Successfully posted.");
}