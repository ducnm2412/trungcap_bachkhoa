export type Major = {
  slug: string;
  name: string;
  group: "Y – Dược" | "Kỹ thuật – Công nghệ" | "Kinh tế" | "Ngoại ngữ";
  desc: string;
  intro: string;
  learn: string[];
  jobs: string[];
  img: string;
  /** Ảnh minh họa ngành — thay bằng ảnh thực tế của từng ngành khi có */
  photo: string;
};

const P = {
  duoc: "/499950786_712710624647171_2219965835143449016_n.jpg",
  cntt: "/500093081_712715651313335_8774571315096172820_n.jpg",
  trung: "/499415833_712717387979828_9032098146062915480_n.jpg",
  tcq: "/854143808_1129389872979242_3890253322672408158_n.jpg",
  lop10: "/675605903_972963461955218_2611189865476705292_n.jpg",
};

export const MAJORS: Major[] = [
  {
    slug: "cong-nghe-thong-tin", photo: "/481907000_653092503942317_8543025953731037875_n.jpg", name: "Công nghệ thông tin", group: "Kỹ thuật – Công nghệ", img: P.cntt,
    desc: "Quản trị mạng, lập trình ứng dụng, tin học văn phòng nâng cao.",
    intro: "Ngành Công nghệ thông tin đào tạo kỹ thuật viên biết lắp đặt, quản trị hệ thống máy tính và xây dựng ứng dụng cơ bản cho doanh nghiệp.",
    learn: ["Lắp ráp, cài đặt và bảo trì máy tính", "Quản trị mạng LAN, hệ điều hành Windows/Linux", "Lập trình căn bản, cơ sở dữ liệu", "Thiết kế website", "Tin học văn phòng nâng cao"],
    jobs: ["Kỹ thuật viên IT tại doanh nghiệp, trường học", "Nhân viên quản trị mạng", "Lập trình viên web cơ bản", "Kinh doanh, sửa chữa thiết bị tin học"],
  },
  {
    slug: "cong-nghe-o-to", photo: "/499527285_712538514664382_5712155747554465436_n.jpg", name: "Kỹ thuật công nghệ ô tô", group: "Kỹ thuật – Công nghệ", img: P.lop10,
    desc: "Bảo dưỡng, sửa chữa động cơ, điện – điện tử ô tô.",
    intro: "Ngành Công nghệ ô tô trang bị kỹ năng kiểm tra, bảo dưỡng và sửa chữa các hệ thống trên ô tô đời mới, học thực hành trên mô hình và xe thực tế.",
    learn: ["Cấu tạo và sửa chữa động cơ xăng, diesel", "Hệ thống truyền lực, phanh, lái, treo", "Điện – điện tử ô tô, chẩn đoán lỗi bằng máy", "Bảo dưỡng định kỳ", "An toàn lao động trong xưởng"],
    jobs: ["Kỹ thuật viên tại gara, đại lý ô tô", "Nhân viên cố vấn dịch vụ", "Kỹ thuật viên nhà máy lắp ráp", "Tự mở xưởng sửa chữa"],
  },
  {
    slug: "duoc", photo: "/618261219_904269195491312_1395130396707615321_n.jpg", name: "Dược", group: "Y – Dược", img: P.duoc,
    desc: "Dược sĩ trung cấp, kỹ năng bán và tư vấn thuốc tại nhà thuốc.",
    intro: "Ngành Dược đào tạo dược sĩ trung cấp nắm vững kiến thức về thuốc, biết bảo quản, cấp phát và tư vấn sử dụng thuốc an toàn.",
    learn: ["Hóa dược, dược lý", "Bào chế và kiểm nghiệm thuốc", "Quản lý, bảo quản thuốc tại kho và nhà thuốc", "Kỹ năng tư vấn bán thuốc", "Pháp luật dược"],
    jobs: ["Nhân viên nhà thuốc, quầy thuốc", "Trình dược viên", "Nhân viên kho dược bệnh viện, công ty", "Đủ điều kiện mở quầy thuốc theo quy định"],
  },
  {
    slug: "dieu-duong", photo: "/617244490_904269292157969_8405627642313795562_n.jpg", name: "Điều dưỡng", group: "Y – Dược", img: P.duoc,
    desc: "Chăm sóc người bệnh tại cơ sở y tế, trung tâm dưỡng lão.",
    intro: "Ngành Điều dưỡng đào tạo nhân lực chăm sóc sức khỏe, thực hiện kỹ thuật điều dưỡng cơ bản và hỗ trợ bác sĩ trong điều trị.",
    learn: ["Giải phẫu – sinh lý", "Kỹ thuật điều dưỡng cơ bản", "Chăm sóc người bệnh nội, ngoại khoa", "Chăm sóc sức khỏe bà mẹ, trẻ em", "Sơ cứu, cấp cứu ban đầu"],
    jobs: ["Điều dưỡng tại bệnh viện, phòng khám", "Chăm sóc tại trung tâm dưỡng lão", "Chăm sóc sức khỏe tại nhà", "Làm việc tại nước ngoài theo chương trình hợp tác"],
  },
  {
    slug: "y-hoc-co-truyen", photo: "/618025473_904269232157975_1183183366398560697_n.jpg", name: "Y học cổ truyền", group: "Y – Dược", img: P.duoc,
    desc: "Châm cứu, xoa bóp bấm huyệt, dược liệu y học cổ truyền.",
    intro: "Ngành Y học cổ truyền kết hợp lý luận đông y với kỹ thuật trị liệu như châm cứu, xoa bóp bấm huyệt và sử dụng dược liệu.",
    learn: ["Lý luận cơ bản y học cổ truyền", "Châm cứu, xoa bóp bấm huyệt", "Nhận biết và bào chế dược liệu", "Bệnh học y học cổ truyền", "Kết hợp đông – tây y"],
    jobs: ["Kỹ thuật viên tại khoa YHCT bệnh viện", "Phòng chẩn trị, nhà thuốc đông y", "Trung tâm vật lý trị liệu, phục hồi chức năng", "Cơ sở chăm sóc sức khỏe, spa trị liệu"],
  },
  {
    slug: "tieng-trung-quoc", photo: "/499228302_712536057997961_8864706090475018282_n.jpg", name: "Tiếng Trung Quốc", group: "Ngoại ngữ", img: P.trung,
    desc: "Tiếng Trung giao tiếp, thương mại; làm việc tại doanh nghiệp FDI.",
    intro: "Ngành Tiếng Trung Quốc đào tạo bốn kỹ năng nghe – nói – đọc – viết, chú trọng tiếng Trung giao tiếp và thương mại cho môi trường doanh nghiệp.",
    learn: ["Ngữ âm, ngữ pháp, chữ Hán", "Giao tiếp tiếng Trung hằng ngày", "Tiếng Trung thương mại, văn phòng", "Biên – phiên dịch cơ bản", "Văn hóa Trung Quốc"],
    jobs: ["Phiên dịch, trợ lý tại doanh nghiệp Trung Quốc, Đài Loan", "Nhân viên xuất nhập khẩu", "Hướng dẫn viên, nhân viên bán hàng", "Du học, xuất khẩu lao động"],
  },
  {
    slug: "tieng-anh", photo: "/500059290_712536101331290_1955433981489571009_n.jpg", name: "Tiếng Anh", group: "Ngoại ngữ", img: P.tcq,
    desc: "Tiếng Anh giao tiếp, văn phòng và thương mại.",
    intro: "Ngành Tiếng Anh giúp người học sử dụng tiếng Anh tự tin trong giao tiếp, công việc văn phòng và thương mại.",
    learn: ["Nghe – nói – đọc – viết", "Tiếng Anh văn phòng, thư tín", "Tiếng Anh thương mại", "Biên – phiên dịch cơ bản", "Luyện thi chứng chỉ quốc tế"],
    jobs: ["Nhân viên văn phòng, lễ tân tại doanh nghiệp nước ngoài", "Trợ giảng tại trung tâm ngoại ngữ", "Nhân viên du lịch, khách sạn", "Nhân viên chăm sóc khách hàng"],
  },
  {
    slug: "ke-toan-doanh-nghiep", photo: "/619914373_904269442157954_3855030004394099076_n.jpg", name: "Kế toán doanh nghiệp", group: "Kinh tế", img: P.tcq,
    desc: "Kế toán tổng hợp, kế toán thuế, phần mềm kế toán.",
    intro: "Ngành Kế toán doanh nghiệp đào tạo kỹ năng ghi chép, lập chứng từ, báo cáo tài chính và kê khai thuế cho doanh nghiệp vừa và nhỏ.",
    learn: ["Nguyên lý kế toán", "Kế toán tài chính, kế toán thuế", "Lập báo cáo tài chính", "Phần mềm kế toán MISA, Excel", "Luật thuế và chế độ kế toán"],
    jobs: ["Kế toán viên tại doanh nghiệp", "Nhân viên thu ngân, thủ quỹ", "Kế toán dịch vụ, khai thuế", "Nhân viên ngân hàng, tài chính"],
  },
  {
    slug: "quan-tri-kinh-doanh", photo: "/481707895_655864133665154_3184792515562588741_n.jpg", name: "Quản trị kinh doanh", group: "Kinh tế", img: P.tcq,
    desc: "Bán hàng, marketing, quản lý cửa hàng và doanh nghiệp nhỏ.",
    intro: "Ngành Quản trị kinh doanh trang bị kiến thức bán hàng, marketing và vận hành cửa hàng, doanh nghiệp nhỏ.",
    learn: ["Kinh tế học, quản trị học", "Marketing và bán hàng", "Quản trị nhân sự", "Kinh doanh online, thương mại điện tử", "Khởi sự doanh nghiệp"],
    jobs: ["Nhân viên kinh doanh, marketing", "Quản lý cửa hàng, siêu thị", "Nhân viên hành chính – nhân sự", "Tự kinh doanh, bán hàng online"],
  },
  {
    slug: "ky-thuat-xet-nghiem-y-hoc", photo: "/617858912_904269352157963_2588800344106095165_n.jpg", name: "Kỹ thuật xét nghiệm y học", group: "Y – Dược", img: P.duoc,
    desc: "Xét nghiệm huyết học, sinh hóa, vi sinh tại phòng xét nghiệm.",
    intro: "Ngành Kỹ thuật xét nghiệm y học đào tạo kỹ thuật viên lấy mẫu, thực hiện và đọc kết quả các xét nghiệm phục vụ chẩn đoán.",
    learn: ["Huyết học, truyền máu", "Hóa sinh lâm sàng", "Vi sinh – ký sinh trùng", "Vận hành máy xét nghiệm", "An toàn sinh học phòng xét nghiệm"],
    jobs: ["Kỹ thuật viên xét nghiệm bệnh viện", "Phòng khám, trung tâm xét nghiệm tư nhân", "Trung tâm y tế dự phòng", "Công ty thiết bị y tế"],
  },
  {
    slug: "ky-thuat-hinh-anh-y-hoc", photo: "/481985653_655864343665133_3490575292844249059_n.jpg", name: "Kỹ thuật hình ảnh y học", group: "Y – Dược", img: P.duoc,
    desc: "Vận hành thiết bị X-quang, siêu âm, CT theo chỉ định.",
    intro: "Ngành Kỹ thuật hình ảnh y học đào tạo kỹ thuật viên vận hành thiết bị chẩn đoán hình ảnh và thực hiện kỹ thuật chụp theo chỉ định của bác sĩ.",
    learn: ["Giải phẫu X-quang", "Kỹ thuật chụp X-quang thường quy", "Siêu âm, CT, MRI cơ bản", "Xử lý phim, hình ảnh số", "An toàn bức xạ"],
    jobs: ["Kỹ thuật viên khoa chẩn đoán hình ảnh", "Phòng khám đa khoa", "Trung tâm chẩn đoán y khoa", "Công ty thiết bị y tế"],
  },
  {
    slug: "ky-thuat-phuc-hinh-rang", photo: "/622173611_904269138824651_4336369744789753463_n.jpg", name: "Kỹ thuật phục hình răng", group: "Y – Dược", img: P.duoc,
    desc: "Chế tác răng giả, hàm giả tại labo nha khoa.",
    intro: "Ngành Kỹ thuật phục hình răng đào tạo kỹ thuật viên chế tác răng giả, hàm giả và khí cụ nha khoa theo chỉ định của bác sĩ.",
    learn: ["Giải phẫu răng", "Vật liệu nha khoa", "Chế tác hàm giả tháo lắp", "Răng sứ, cầu răng cố định", "Thiết kế phục hình CAD/CAM cơ bản"],
    jobs: ["Kỹ thuật viên labo nha khoa", "Phòng khám nha khoa", "Công ty vật liệu nha khoa", "Tự mở labo"],
  },
];

export const findMajor = (slug: string) => MAJORS.find((m) => m.slug === slug);
