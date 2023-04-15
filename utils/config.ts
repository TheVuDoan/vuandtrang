import groom from '../public/groom.webp';
import bride from '../public/bride.webp';
import { WeddingInfoModalProps } from './types';

// Metadata
export const metadata = {
  title: 'VuAndTrang Wedding Site!',
  description: 'VuAndTrang Wedding Site!',
  ogSitename: 'vandt.day',
  ogImage: 'https://vandt.day/hero.webp'
};

// Landing page
export const groomAndBride = {
  bride: {
    image: bride,
    alt: 'Cô dâu',
    name: 'Vũ Minh Trang',
    shortName: 'Minh Trang'
  },
  groom: {
    image: groom,
    alt: 'Chú rể',
    name: 'Đoàn Thế Vũ',
    shortName: 'Thế Vũ'
  }
};

export const introduction = `Chúng mình rất hạnh phúc khi lên từng chi tiết cho lễ thành hôn với người mà mình yêu nhất, trước sự chứng kiến của gia đình và những người bạn thân thiết.
Cám ơn các bạn đã dành thời gian ghé thăm trang web của chúng mình!`;

export const ourStories = [
  {
    time: '3/12/2017',
    title: 'Lần đầu gặp gỡ',
    description: `Một lần rất tình cờ chúng mình được những người bạn chung rủ đi chơi theo tiêu chí “càng đông càng vui”. Thế là thành lần gặp gỡ đầu tiên, tuy không dài nhưng đủ để cho 2 đứa có ấn tượng tốt về “bạn kia” 😊 \n
Và ấn tượng tốt đấy đưa bọn mình thành bạn bè, tới những cuộc hội thoại vu vơ mỗi buổi tối.`
  },
  {
    time: '2/4/2020',
    title: 'Chính thức hẹn hò',
    description: `Dần dần có một cảm giác trên tình bạn đã dần len lỏi vào từng câu chuyện nhỏ của chúng mình. \n
Nhưng ở thời điểm bắt đầu bước chân vào “thị trường lao động”, cả 2 đều muốn tập trung vào sự nghiệp. Những cuộc trò chuyện cũng không còn liên tục, nhưng 2 đứa vẫn luôn quan tâm tới cuộc sống của đối phương. \n
Và rồi, một ngày mang ý nghĩa là hậu cá tháng 4, bọn mình đã chính thức đến với nhau 😊`
  },
  {
    time: '14/10/2022',
    title: 'Cầu hôn',
    description: `Suốt thời gian gần 3 năm, 2 đứa bên nhau cùng đi qua những cung bậc cảm xúc của tình yêu, cũng như là người bạn đồng hành qua những trải nghiệm trong công việc và cuộc sống. Bọn mình đều cùng nhau đi qua, tự hoàn thiện bản thân để trở thành “better me” và thành chỗ dựa cho người còn lại. \n
Ngày 14/10, đằng gái chính thức nhận lời cầu hôn, cả 2 đã sẵn sàng xây dựng hạnh phúc với nửa kia.`
  },
  {
    time: '11/3/2023',
    title: 'Lễ thành hôn',
    description: `Không có một từ ngữ nào có thể diễn tả cảm xúc của chúng mình trong khoảng thời gian chờ đợi cho đến ngày trọng đại nhất của cuộc đời, cùng nhau viết nên một chặng đường mới với người mà mình yêu. \n
Dù cho có khó khăn như thế nào, cũng sẽ có một người cùng mình nắm tay đi về phía trước.`
  }
];

export const weddingInfoes: WeddingInfoModalProps[] = [
  {
    cardTitle: 'Lễ cưới nhà gái',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.0460639195676!2d106.69116121547967!3d20.863217909550816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7be3b26b7f15%3A0xfb767616d10e5e50!2zVHJ1bmcgdMOibSB0aeG7h2MgY8aw4bubaSBI4bqjaSDEkMSDbmcgUGxhemEgSOG6o2kgUGjDsm5n!5e0!3m2!1svi!2s!4v1674915525839!5m2!1svi!2s',
    locationTitle: 'Trung Tâm Tiệc Cưới Hải Đăng Plaza, 19 Trần Khánh Dư, Máy Tơ, Ngô Quyền, Hải Phòng',
    time: '17:30 1/3/2023',
    timeline: [
      {
        time: '17:00 - Đón Khách',
        activity: 'Trò chuyện và chụp ảnh lưu niệm cùng cô dâu và chú rể.'
      },
      {
        time: '17:30 - Lễ thành hôn',
        activity: 'Hòa nhịp vào thời khắc làm lễ trọng đại, chứng kiến những phút giây thiêng liêng của cô dâu chú rể.'
      },
      {
        time: '18:00 - Khai tiệc',
        activity: 'Tận hưỡng bữa tối thân mật và thưởng thức những món quà văn nghệ của gia đình, bạn bè cô dâu chú rể.'
      }
    ]
  },
  {
    cardTitle: 'Lễ cưới nhà trai',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3912117178347!2d105.81358851543025!3d21.01702708600477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab64a157d313%3A0xc315cd481b1a6e5!2zVHJ1bmcgVMOibSBUaeG7h2MgQ8aw4bubaSBTdGFyIEdhbGF4eQ!5e0!3m2!1svi!2s!4v1674912984562!5m2!1svi!2s',
    locationTitle: 'Trung Tâm Tiệc Cưới Star Galaxy, 87 Láng Hạ, Thành Công, Ba Đình, Hà Nội',
    time: '11:00 11/3/2023',
    timeline: [
      {
        time: '10:30 - Đón Khách',
        activity: 'Đón khách, chụp ảnh lưu niệm cùng cô dâu và chú rể.'
      },
      {
        time: '11:00 - Lễ thành hôn',
        activity: 'Hòa nhịp vào thời khắc làm lễ trọng đại, chứng kiến những phút giây thiêng liêng của cô dâu chú rể.'
      },
      {
        time: '11:30 - Khai tiệc',
        activity: 'Tận hưỡng bữa trưa và thưởng thức những món quà văn nghệ của gia đình, bạn bè cô dâu chú rể.'
      }
    ]
  }
];

export const footer = '#vuandtrang 2023';

// Album Page


