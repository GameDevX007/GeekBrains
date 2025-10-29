let passwords = [
  "AE9GU4","Am9pd8","Az2xg0","BR1tG7","Bl1gv0","Bu7cq","Bu9lw4h","CY2mw5W","DL6ta8","Ed4Eg7",
  "Eg8rw2","En2mf6","Er2ya3","Eu9fn6","Ev4je0","Ex1qb4","Fb6ru2","Fd3nk7","Fe5go0","Fg7kc2",
  "Fi2vn8","Fk8la3","Fl1op9","Fm6tw0","Fn3qy7","Fr5az2","Fx9dm6","Ga2bv5","Gb6ru1","Gc1zm8",
  "Gd4wy0","Ge7po2","Gf3kn9","Gm8la4","Gn2qr6","Gr5sx1","Gt9vb3","Gu1hw7","Gx6pe0","Ha2rm5",
  "Hb4qv8","He9lo1","Hg3tn6","Hi1pw7","Hj6se2","Hk8zc4","Hl2bm9","Hm5ur0","Hn3gd7","Hr7ax1",
  "Hw9fo2","Hy1kc6","Hz4vp8","Ia2qd5","Ib6rm0","Ic1zn7","Id3wo8","Ie7pl2","If9gx4","Ig5tn1",
  "Ij2cv6","Ik8sa3","Il4bm9","Im1yd7","In6rf0","Io3qv2","Ip9zh5","Iq2le8","Ir7pn1","Is4gw6",
  "It1kb9","Iu5rv2","Iv8qm3","Iw3zt7","Ix6by0","Ja2pv5","Jb9er1","Jc4qm8","Jd1nk6","Je7lo2",
  "Jf3sy9","Jg6pa0","Jh2vb7","Ji8wx4","Jk5rn1","Jl1qd6","Jm9tz3","Jn4bp8","Jo2sv7","Jp6ke0",
  "Jq3rm5","Jr8yl1","Js1gw9","Ju5pn2","Jv4zb6","Jw7qc3","Jx2hf8","Ka9rm4","Kb3pv1","Kc6tw8",
  "Kd1qn7","Ke5lz2","Kf8yb0","Kg2sd6","Kh4mr9","Ki7op3","Kj1vx5","Kl9qa2","Km3nb8","Kn6yw0",
  "Ko2fz7","Kp5re1","Kr8gm4","Ks1dp9","Kt4zc6","Ku7lv2","Kv3hb0","Kw9qn5","Kx2sr8","La6pv1",
  "Lb3rm8","Lc9tw4","Ld1qn5","Le7lz2","Lf4yb9","Lg2sd6","Lh8mr3","Li5op0","Lj1vx7","Lk6qa2",
  "Ll3nb9","Lm9yw4","Ln2fz6","Lo7re1","Lp4gm8","Lq1dp3","Lr8zc5","Ls5lv0","Lt2hb7","Lu9qn6",
  "Lv3sr1","Lw6pv8","Lx1rm4","Ma2tw9","Mb8qn3","Mc5lz1","Md1yb6","Me7sd4","Mf3mr0","Mg9op2",
  "Mh4vx7","Mi6qa1","Mj2nb8","Mk7yw3","Ml3fz9","Mm1re6","Mn8gm4","Mo5dp2","Mp9zc0","Mq2lv7",
  "Mr6hb1","Ms4qn8","Mt1sr5","Mu7pv3","Mv3rm9","Mw8tw0","Mx5qn2"
];


let attempts = 2000
let password_to_guess = passwords[Math.floor(Math.random() * passwords.length)];
let password_input = document.getElementById("password")
let check_btn = document.getElementById("check_btn")

const lowerPasswords = passwords.map(p => typeof p === 'string' ? p.toLowerCase() : p);


check_btn.addEventListener("click", () => check_password());

if (!localStorage.getItem("password")){
    localStorage.setItem("password",password_to_guess)
}

password_input.addEventListener("input", function() {
  this.value = this.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/g, '');
});

function check_password() {
    if ((password_input.value) === (localStorage.getItem("password"))) {
        console.log("Surprise!!")
        password_input.value = ""
        password_to_guess = passwords[Math.floor(Math.random() * passwords.length)];
        localStorage.setItem("password", password_to_guess)

        console.log(password_to_guess)
    }
}
console.log(localStorage.getItem("password"));