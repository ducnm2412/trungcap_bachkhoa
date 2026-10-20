// Nội dung lấy từ các poster tuyển sinh trong thư mục public
export type Program = {
  slug: string;
  name: string;
  short: string;
  poster: string;
  posters: string[];
  target: string;
  duration: string;
  majors: string[];
  benefits: string[];
  note?: string;
};

const p = (id: string) => `/${id}.jpg`;

export const PROGRAMS: Program[] = [
  {
    slug: "lop-10-ket-hop-trung-cap",
    name: "Lớp 10 kết hợp Trung cấp chính quy",
    short: "Vừa học văn hóa, vừa học nghề. Sau 3 năm nhận bằng THPT và bằng Trung cấp.",
    poster: p("729784867_1028115473106683_8219542295298317084_n"),
    posters: [p("504801529_723828436868723_1428903809076542400_n"), p("675605903_972963461955218_2611189865476705292_n"), p("482030792_653092607275640_7112079629161641080_n")],
    target: "Học sinh tốt nghiệp THCS",
    duration: "03 năm (THPT + Trung cấp)",
    majors: ["Công nghệ thông tin", "Kỹ thuật công nghệ ô tô", "Kế toán doanh nghiệp", "Quản trị kinh doanh", "Tiếng Anh", "Tiếng Trung Quốc"],
    benefits: [
      "Học chương trình lớp 10 – 11 – 12 do Trung tâm giáo dục thường xuyên đào tạo",
      "Tham dự kỳ thi tốt nghiệp THPT quốc gia",
      "Hỗ trợ 100% học phí học nghề",
      "Nhận bằng tốt nghiệp THPT và bằng Trung cấp chính quy",
      "Liên thông Cao đẳng, Đại học trên toàn quốc",
    ],
    note: "Xét tuyển học bạ, không thi tuyển. Học tại cơ sở Dĩ An.",
  },
  {
    slug: "trung-cap-chinh-quy",
    name: "Trung cấp chính quy – học tối, cuối tuần",
    short: "Học buổi tối hoặc cuối tuần, phù hợp với người đang đi làm.",
    poster: p("854143808_1129389872979242_3890253322672408158_n"),
    posters: [],
    target: "Tốt nghiệp THCS trở lên",
    duration: "Buổi tối hoặc cuối tuần",
    majors: ["Kế toán doanh nghiệp", "Công nghệ thông tin", "Tiếng Trung Quốc", "Quản trị kinh doanh"],
    benefits: [
      "Hỗ trợ 100% học phí cho học sinh tốt nghiệp THCS học tiếp học nghề",
      "Lịch học linh hoạt, không ảnh hưởng công việc",
      "Nhận bằng Trung cấp chính quy, liên thông lên Cao đẳng, Đại học",
    ],
  },
  {
    slug: "khoi-nganh-y-duoc",
    name: "Trung cấp khối ngành Y – Dược",
    short: "Dược, Điều dưỡng, Y học cổ truyền và các ngành kỹ thuật y học.",
    poster: p("499950786_712710624647171_2219965835143449016_n"),
    posters: [p("481066402_650935267491374_2117557465064442476_n")],
    target: "Tốt nghiệp THCS, THPT; tốt nghiệp Trung cấp, Cao đẳng, Đại học ngành khác",
    duration: "18 – 24 tháng",
    majors: ["Dược", "Điều dưỡng", "Y học cổ truyền", "Kỹ thuật xét nghiệm y học", "Kỹ thuật hình ảnh y học", "Kỹ thuật phục hình răng", "Y sỹ đa khoa"],
    benefits: [
      "Học thực hành tại phòng thực hành và cơ sở y tế",
      "Cơ hội liên thông Cao đẳng, Đại học trên toàn quốc",
      "Nhà trường cam kết hỗ trợ việc làm sau tốt nghiệp",
    ],
  },
  {
    slug: "nganh-cong-nghe-thong-tin",
    name: "Trung cấp ngành Công nghệ thông tin",
    short: "Quản trị mạng, lập trình, tin học văn phòng nâng cao.",
    poster: p("500093081_712715651313335_8774571315096172820_n"),
    posters: [],
    target: "Tốt nghiệp THCS, THPT; tốt nghiệp Trung cấp, Cao đẳng, Đại học ngành khác",
    duration: "01 – 02 năm",
    majors: ["Công nghệ thông tin"],
    benefits: [
      "Học trong phòng máy, chú trọng thực hành",
      "Học buổi tối hoặc cuối tuần",
      "Liên thông Cao đẳng, Đại học sau tốt nghiệp",
    ],
  },
  {
    slug: "nganh-tieng-trung-quoc",
    name: "Trung cấp ngành Tiếng Trung Quốc",
    short: "Tiếng Trung giao tiếp, thương mại; làm việc tại doanh nghiệp FDI.",
    poster: p("499415833_712717387979828_9032098146062915480_n"),
    posters: [],
    target: "Tốt nghiệp THCS, THPT; tốt nghiệp Trung cấp, Cao đẳng, Đại học ngành khác",
    duration: "01 – 02 năm",
    majors: ["Tiếng Trung Quốc"],
    benefits: [
      "Luyện 4 kỹ năng nghe – nói – đọc – viết",
      "Học buổi tối hoặc cuối tuần",
      "Liên thông Cao đẳng, Đại học sau tốt nghiệp",
    ],
  },
  {
    slug: "boi-duong-khoi-nganh-suc-khoe",
    name: "Đào tạo liên tục, bồi dưỡng khối ngành sức khỏe",
    short: "Các khóa ngắn hạn cập nhật kiến thức tại Đồng Nai, Bình Dương. Có lớp trực tuyến.",
    poster: p("481766657_650934954158072_768734783424513729_n"),
    posters: [],
    target: "Cán bộ y tế: bác sĩ, điều dưỡng, y sỹ, kỹ thuật viên…",
    duration: "Ngắn hạn, có lớp trực tuyến",
    majors: [
      "Dinh dưỡng tiết chế", "Điện tâm đồ cơ bản", "Điện tâm đồ", "Kiểm soát nhiễm khuẩn", "Phục hồi chức năng",
      "Thư ký y khoa", "Bệnh nghề nghiệp", "Kỹ thuật viên kính thuốc", "Quản lý trang thiết bị y tế",
      "Phương pháp dạy học lâm sàng cho người dạy thực hành khối ngành sức khỏe",
    ],
    benefits: [
      "Khóa đào tạo liên tục cấp CME cho cán bộ y tế",
      "Bồi dưỡng theo tiêu chuẩn chức danh nghề nghiệp viên chức ngành Y tế và Giáo dục",
      "Học trực tiếp hoặc trực tuyến",
    ],
  },
  {
    slug: "lien-thong-cao-dang-dai-hoc",
    name: "Hỗ trợ tư vấn liên thông Cao đẳng, Đại học, Sau đại học",
    short: "Tư vấn lộ trình học lên Cao đẳng, Đại học, Chuyên khoa và Thạc sĩ.",
    poster: p("481066402_650935267491374_2117557465064442476_n"),
    posters: [],
    target: "Người đã có bằng Trung cấp, Cao đẳng, Đại học",
    duration: "Theo chương trình của từng trường liên kết",
    majors: [
      "Cao đẳng: Dược, Điều dưỡng, Hộ sinh, Kế toán, Y sỹ đa khoa, Y học cổ truyền, KT xét nghiệm, KT hình ảnh, KT phục hồi chức năng",
      "Đại học: Cử nhân Điều dưỡng, Điều dưỡng phụ sản, KT xét nghiệm, KT hình ảnh, KT phục hồi chức năng, Y tế công cộng, Giáo dục mầm non",
      "Chuyên khoa cấp I: Nhi, Nội, Ngoại, Điều dưỡng, Sản phụ khoa, Dược lý – dược lâm sàng, Răng hàm mặt…",
      "Chuyên khoa cấp II: Quản lý y tế",
      "Thạc sĩ: Quản lý y tế, Y tế công cộng, Quản trị kinh doanh, Quản lý giáo dục, Tài chính ngân hàng",
    ],
    benefits: [
      "Tư vấn chọn ngành, chọn trường phù hợp",
      "Hỗ trợ chuẩn bị hồ sơ xét tuyển",
    ],
  },
];

export const findProgram = (slug: string) => PROGRAMS.find((x) => x.slug === slug);
