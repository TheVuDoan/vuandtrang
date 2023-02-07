const OurStory = () => {
  const data = [
    {
      time: '3/12/2017',
      title: 'Lần gặp gỡ đầu tiên',
      description: `Một lần rất tình cờ chúng mình được những người bạn chung rủ đi chơi theo tiêu chí “càng đông càng vui”, thế là thành lần gặp gỡ đầu tiên, đủ để cho chúng mình có ấn tượng tốt về “bạn kia”. 
      Và ấn tượng tốt đấy đưa chúng mình thành bạn bè trên FB, tới những cuộc hội thoại vu vơ mỗi buổi tối, trở thành những người bạn tốt`
    },
    {
      time: '2/4/2020',
      title: 'Chính thức hẹn hò',
      description: `Dần dần có một cảm giác trên tình bạn đã dần len lỏi vào những câu chuyện nhỏ của chúng mình. Nhưng ở thời điểm bắt đầu bước chân vào “thị trường lao động”, cả 2 đều muốn tập trung vào sự nghiệp.
      Những cuộc trò chuyện cũng không còn liên tục, nhưng cả 2 vẫn luôn quan tâm tới cuộc sống của đối phương.
      Có lẽ, 2 đứa vẫn chờ đợi 1 cơ hội thích hợp để bày tỏ với người kia về cảm xúc của mình
      Và rồi, một ngày mang ý nghĩa là hâu cá tháng 4, bọn mình đã chính thức đến với nhau 😊`
    },
    {
      time: '14/10/2022',
      title: 'Phút giây cầu hôn',
      description: `
      Suốt thời gian hơn 2 năm, 2 đứa bên nhau cùng đi qua những cảm xúc của tình yêu với đủ sắc màu vui buồn hờn giận, cũng như là những người bạn đồng hành qua những trải nghiệm trong công việc và cuộc sống. Bọn mình đều cùng nhau đi qua, tự hoàn thiện bản thân để trở thành “better me” và thành chỗ dựa cho người còn lại.
      Ngày 14/10, 2 đứa cùng nhau “phượt” Ninh Bình và đằng trai chọn tháp hang Múa làm địa điểm cầu hôn trước sự chứng kiến của các khách du lịch 😊 Đằng gái đã gật đầu say yes và trên ngón tay đã có thêm 1 chiếc nhẫn.
      Bước đường sắp tới dù có khó khăn như thế nào, thì cũng có một người cùng mình nắm tay chung bước `
    },
    {
      time: '11/3/2023',
      title: 'Lễ thành hôn',
      description: 'The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.'
    }
  ]
  return (
    <section className="pt-20 pb-10 px-10 md:px-48 text-gray-700">
      <h1 className="text-5xl text-center font-great-vibes mb-10">
        Câu chuyện của bọn mình
      </h1>
      <div className="relative h-full">
        <div className="border-2 border-[#285c4e] absolute h-full md:left-1/2"></div>
        <div className="border-2 border-[#285c4e] absolute h-full md:right-1/2"></div>
        {data.map((item, index) => 
          <div className={`ml-6 md:ml-0 mb-8 flex ${index % 2 === 0 ? "md:text-right flex-row-reverse" : ""}`} key={item.time}>
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2 md:px-6">
              <p className="mb-3 font-bold text-[#ee9492]">{item.time}</p>
              <h2 className="mb-3 font-bold text-lg md:text-2xl">{item.title}</h2>
              <p className="text-sm md:text-base text-gray-700 text-opacity-100">
                {item.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurStory;
  