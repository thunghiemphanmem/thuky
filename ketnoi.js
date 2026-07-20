// =========================================================================
// KHỐI 1: BẢNG CẤU HÌNH TRUNG TÂM HỆ THỐNG GIAO DIỆN (FRONTEND)
// Tệp: ketnoi.js
// Nguyên tắc: Định danh an toàn, tiếng Việt rõ nghĩa, tốc độ truy xuất nhanh.
// =========================================================================

const KET_NOI = {
  // 1. THÔNG SỐ KẾT NỐI MÁY CHỦ
  URL_API_BACKEND: 'https://script.google.com/macros/s/AKfycbzso6qg0bBefy_j5-x7_xP6jRbOz4K5_Vz94e2oW5PGcD-KpnB1JfH3Tj9FnxZs5mmq/exec',
  
  // 2. THÔNG TIN THỂ THỨC VĂN BẢN (NĐ 30/2020/NĐ-CP)
  CQ_CHU_QUAN: 'UBND XÃ HỢP THÀNH',
  TEN_TO_CHUC: 'TRƯỜNG TH&THCS HỢP THÀNH',
  NOI_BAN_HANH: 'Hợp Thành',
  MA_SO_VAN_BAN: '/BB-THHT', 
  
  // 3. CẤU HÌNH GIAO DIỆN HIỂN THỊ
  TIEU_DE_PHAN_MEM: 'SỔ SOẠN THẢO HÀNH CHÍNH & SƯ PHẠM',
  LOGO_TRUONG: 'https://i.ibb.co/d0JNW94Z/logo-l-a-ch-n6.png', 
  CAN_BO_THAO_TAC: 'Cán bộ Hành chính',

  // 4. MÃ ĐỊNH DANH BẢO MẬT
  CLIENT_ID: '95180316485-a577mlt4a1ve3u52pd0t4rkm6bnljuns.apps.googleusercontent.com',
  
  // 5. MA TRẬN PHÂN QUYỀN TRUY CẬP HỆ THỐNG
  PHAN_QUYEN_TRUY_CAP: {
      'hoangngoclamlc@gmail.com': {
          ID_SO_HOP: '1YikxnUKwmBg7Yf92bgsDCGk14xqSToBWdFTXcGXR0D4',
          ID_THU_MUC_LUU: '1imdsuJvIM1u2hyItdnxoUkJPCpvFaRdG',
          QUYEN_HAN: 'QuanTriToanQuyen'
      },
      'tulieuhopthanh@gmail.com': {
          ID_SO_HOP: '1YikxnUKwmBg7Yf92bgsDCGk14xqSToBWdFTXcGXR0D4', 
          ID_THU_MUC_LUU: '1imdsuJvIM1u2hyItdnxoUkJPCpvFaRdG',
          QUYEN_HAN: 'ThanhVienSoanThao'
      }
  },

  // =======================================================================
  // 6. DANH MỤC VĂN BẢN & MÃ ID GOOGLE DOCS (NGUỒN CHO Ô CHỌN)
  // Giao diện tự động quét mảng này để tạo danh sách thả xuống.
  // =======================================================================
  DANH_MUC_VAN_BAN: [
      { 
        giaTri: '1', 
        tenHienThi: '1. Phiếu đánh giá bài dạy', 
        idMau: '1jnw6hDhENU8ZEGmVVrZ8ToiBtU9Op6P3d6UJYtIgL2g' 
      },
      { 
        giaTri: '2', 
        tenHienThi: '2. Biên bản sự việc (Hành chính)', 
        idMau: '1CmSoYvnrEvG1TwpndNWAasrxM-dOosjJuPQ7phJ7KUQ' 
      },
      { 
        giaTri: '3', 
        tenHienThi: '3. Hồ sơ Đảng (Quyết định thành lập)', 
        idMau: '1K4Opl9vLDmb9n-Tfmv92EV8HXvGeQYZDzSt04kbq1WA' 
      },
    { 
        giaTri: '4', 
        tenHienThi: '4. Hồ sơ Đảng (Kế hoạch)', 
        idMau: '1a_tWkToYqxAR9_GGSzbG7T9aBdjApb-W0ukREDNmneM' 
      },
    { 
        giaTri: '5', 
        tenHienThi: '5. Hồ sơ Đảng (Biên bản triển khai cuộc kiểm tra)', 
        idMau: '11UcC6lR535Bk_t7aqU5ginhzCMNMXltHKdKRrEEzAuM' 
      },
      { 
        giaTri: '6', 
        tenHienThi: '6. Báo cáo (Giải trình)', 
        idMau: '1ywCHAAc1MV6vfbWyfgjghZ7kXaeF5NbiQAhJ4a0wBCA' 
      },
 	{ 
        giaTri: '7', 
        tenHienThi: '7. Hồ sơ Đảng (Báo cáo thẩm tra)', 
        idMau: '13SAqCUva3f1DJlzoiMVgCW40KuLxQdy4TbY6CGSXgcg' 
      },
{ 
        giaTri: '8', 
        tenHienThi: '8. Hồ sơ Đảng (Biên bản họp chi bộ)', 
        idMau: '1F1BsnPcTU0e8oCYRjvuqV-f29wZGYZp7F1tIrOIpEY0' 
      },
{ 
        giaTri: '9', 
        tenHienThi: '9. Hồ sơ Đảng (Biên bản công bố kết quả kiểm tra)', 
        idMau: '1PwNt_uf_D1BAzCLg-KIILIsiA2sJeDExE982eJ9gKBA' 
      },

  ]
};
