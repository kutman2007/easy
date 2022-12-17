
      let data = [
        {
          title: "7:25 AM",
          img: "1png.jpg",
          des: "Boston",
        },
        {
          title: "8:25 AM",
          img: "2png.jpg",
          des: "Madrid",
        },
        {
          title: "7:55 AM",
          img: "3png.jpg",
          des: "Boston",
        },
        {
          title: "7:25 AM",
          img: "4png.jpg",
          des: "Boston",
        },
        {
          title: "7:25 AM",
          img: "5png.jpg",
          des: "Boston",
        },
        {
          title: "7:25 AM",
          img: "6png.jpg",
          des: "Boston",
        },
        {
          title: "7:25 AM",
          img: "7png.jpg",
          des: "Boston",
        },
        {
          title: "7:25 AM",
          img: "8png.jpg",
          des: "Boston",
        },
        {
          title: "7:25 AM",
          img: "9png.jpg",
          des: "Boston",
        },
      ];

let kaka = document.createElement('div')
kaka.classList.add('kaka')

let renderBlock = () =>{
    let qwer = new DocumentFragment()
    data.map((cat,id)=>{
        let block = document.createElement('div')
        block.classList.add('blocks')
        block.setAttribute('block-color',id+1)
        block.innerHTML = `
        <div class='title'><nav>${cat.title}</nav></div>
        <div class='vas'></div>
        <img width="50px" src="${cat.img}" alt="">
        <div>${cat.des}</div><hr>`
      qwer.append(block)
    })
    return qwer
};
kaka.append(renderBlock())
document.body.append(kaka)
