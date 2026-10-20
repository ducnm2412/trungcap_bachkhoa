export type Article = {
  slug: string;
  date: string; // dd/mm/yyyy
  title: string;
  excerpt: string;
  img: string;
  body: string[];
  gallery: string[];
};

const img = (id: string) => `/${id}.jpg`;

export const ARTICLES: Article[] = [
  {
    slug: "bdp-dong-hanh-tu-van-huong-nghiep-thcs-di-an",
    date: "19/10/2026",
    title: "BDP đồng hành cùng các trường THCS tại Dĩ An trong chương trình tư vấn hướng nghiệp",
    excerpt: "Nhà trường tham gia Lễ trưởng thành Đội và chương trình tư vấn hướng nghiệp cho học sinh lớp 9, giới thiệu mô hình học lớp 10 kết hợp Trung cấp chính quy.",
    img: img("481176649_650935260824708_3978424329703086992_n"),
    body: [
      "Trong khuôn khổ Lễ trưởng thành Đội tại các trường THCS trên địa bàn phường Dĩ An, Trường Trung cấp Bách Khoa Bình Dương đã phối hợp tổ chức chương trình tư vấn hướng nghiệp dành cho học sinh lớp 9.",
      "Tại buổi tư vấn, cán bộ tuyển sinh của trường giới thiệu mô hình học lớp 10 kết hợp Trung cấp chính quy: học sinh vừa học chương trình văn hóa THPT, vừa học nghề, sau 3 năm nhận cùng lúc bằng tốt nghiệp THPT và bằng Trung cấp.",
      "Nhiều học sinh và phụ huynh đặt câu hỏi về chính sách hỗ trợ 100% học phí học nghề, cơ hội liên thông Cao đẳng, Đại học và việc làm sau tốt nghiệp. Các thắc mắc đều được giải đáp trực tiếp ngay tại buổi gặp.",
      "Chương trình là hoạt động thường niên nhằm giúp học sinh có thêm thông tin trước khi lựa chọn hướng đi sau lớp 9.",
    ],
    gallery: [img("481660687_650936157491285_6887785559659495633_n"), img("481824944_650936307491270_2433396803742945906_n"), img("482214250_650935274158040_5023520619597037442_n")],
  },
  {
    slug: "hanh-trinh-ve-nguon-hoc-sinh-trung-cap",
    date: "12/10/2026",
    title: "Hành trình về nguồn – Trải nghiệm thực tế dành cho học sinh khối Trung cấp",
    excerpt: "Chuyến đi gắn kết tập thể, giáo dục truyền thống và rèn luyện kỹ năng sống cho học sinh toàn trường.",
    img: img("499247310_712538547997712_7833559384917220088_n"),
    body: [
      "Đoàn trường tổ chức chương trình “Hành trình về nguồn” cho học sinh khối Trung cấp, kết hợp tham quan di tích lịch sử và các hoạt động trải nghiệm ngoài trời.",
      "Học sinh được nghe thuyết minh về lịch sử địa phương, tham gia trò chơi đồng đội, chèo xuồng và các thử thách rèn luyện kỹ năng làm việc nhóm.",
      "Chuyến đi giúp các em gắn kết với bạn bè, thầy cô và hiểu thêm về truyền thống của quê hương.",
    ],
    gallery: [img("499526047_712538624664371_4882345669806689681_n"), img("499557607_712538584664375_8803203435799516041_n"), img("499384191_712538651331035_5090980670142737652_n")],
  },
  {
    slug: "hoc-sinh-bdp-tham-quan-bao-tang",
    date: "05/10/2026",
    title: "Học sinh BDP tham quan, học tập tại bảo tàng truyền thống",
    excerpt: "Buổi học ngoại khóa môn Lịch sử – Giáo dục công dân giúp các em hiểu thêm về lịch sử địa phương.",
    img: img("500313969_712536231331277_8822651973810606194_n"),
    body: [
      "Nằm trong chương trình học ngoại khóa môn Lịch sử – Giáo dục công dân, học sinh trường đã tham quan bảo tàng truyền thống.",
      "Qua các hiện vật, hình ảnh và tư liệu được trưng bày, các em được tìm hiểu về những giai đoạn lịch sử hào hùng của dân tộc và địa phương.",
      "Hình thức học tập trực quan giúp bài học trở nên sinh động, dễ nhớ hơn so với học trên lớp.",
    ],
    gallery: [img("499228302_712536057997961_8864706090475018282_n"), img("499666365_712536034664630_6734217250178146688_n"), img("500078142_712536194664614_2227963317885341524_n")],
  },
  {
    slug: "khen-thuong-hoc-sinh-nam-hoc-2025-2026",
    date: "28/09/2026",
    title: "Khen thưởng học sinh có thành tích học tập, rèn luyện tốt năm học 2025 – 2026",
    excerpt: "Nhà trường tuyên dương các tập thể, cá nhân tiêu biểu trong học tập và hoạt động phong trào.",
    img: img("482208366_655864263665141_8438852137174287615_n"),
    body: [
      "Nhà trường tổ chức lễ tổng kết và khen thưởng các tập thể, cá nhân có thành tích tốt trong năm học 2025 – 2026.",
      "Các học sinh tiêu biểu được trao giấy khen và phần thưởng, ghi nhận nỗ lực trong học tập, rèn luyện và tham gia hoạt động phong trào của trường.",
      "Đây là nguồn động viên để học sinh tiếp tục phấn đấu trong năm học mới.",
    ],
    gallery: [img("482072548_655864393665128_5978565174670592317_n"), img("482089686_655864193665148_8905002947857477468_n"), img("482219496_655864123665155_3251494619525211425_n")],
  },
  {
    slug: "doan-vien-bdp-dang-huong-tuong-niem",
    date: "15/09/2026",
    title: "Đoàn viên thanh niên BDP dâng hương tưởng niệm các anh hùng liệt sĩ",
    excerpt: "Hoạt động giáo dục truyền thống “Uống nước nhớ nguồn” do Đoàn trường tổ chức.",
    img: img("499247311_712536001331300_3585065997812294851_n"),
    body: [
      "Đoàn trường tổ chức cho đoàn viên, thanh niên dâng hương tưởng niệm các anh hùng liệt sĩ tại khu di tích.",
      "Trong không khí trang nghiêm, các em thành kính tưởng nhớ những người đã hy sinh vì độc lập, tự do của dân tộc.",
      "Hoạt động góp phần giáo dục truyền thống “Uống nước nhớ nguồn” cho thế hệ trẻ.",
    ],
    gallery: [img("499463045_712536294664604_3220989750718199280_n"), img("500059287_712536327997934_5016430034601002417_n"), img("499528944_712536261331274_4242561465233052201_n")],
  },
  {
    slug: "khai-giang-nam-hoc-2026-2027",
    date: "05/09/2026",
    title: "Khai giảng năm học 2026 – 2027 và đón học sinh lớp 10 khóa mới",
    excerpt: "Lễ khai giảng diễn ra trong không khí hân hoan, chào đón tân học sinh lớp 10 kết hợp Trung cấp.",
    img: img("482214250_650935274158040_5023520619597037442_n"),
    body: [
      "Trường Trung cấp Bách Khoa Bình Dương long trọng tổ chức lễ khai giảng năm học 2026 – 2027, chào đón học sinh lớp 10 kết hợp Trung cấp khóa mới.",
      "Tại buổi lễ, Ban giám hiệu nhà trường phát biểu chúc mừng, phổ biến các chính sách hỗ trợ học phí và định hướng học tập cho học sinh.",
      "Năm học mới mở ra nhiều hoạt động học tập, thực hành và phong trào dành cho học sinh toàn trường.",
    ],
    gallery: [img("481985653_655864343665133_3490575292844249059_n"), img("482355306_655864353665132_167683654078460345_n"), img("482226860_655864313665136_4919423664639360804_n")],
  },
];

export const findArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
