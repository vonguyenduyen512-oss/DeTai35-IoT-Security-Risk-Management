# DeTai35-IoT-Security-Risk-Management
# Quản lý rủi ro bảo mật cho hệ thống IoT quy mô nhỏ

**Tiểu luận kết thúc học phần — Bảo mật IoT (INT4410)**
Trường Đại học Văn Hiến — Khoa Công nghệ Thông tin
Sinh viên thực hiện: Võ Nguyễn Duyên — MSSV: 231A010722
Giảng viên hướng dẫn: Hồ Nhựt Minh

---

## 1. Giới thiệu đề tài

IoT đang phát triển cực mạnh và là một trong những trụ cột của Cách mạng công nghiệp 4.0, được ứng dụng khắp nơi: nhà thông minh, nông nghiệp, y tế, giáo dục, giao thông, doanh nghiệp... Nhưng đi kèm với đó là rủi ro bảo mật, đặc biệt ở các hệ thống **quy mô nhỏ** — nơi hạn chế về chi phí, năng lực quản trị và phần cứng khiến nhiều thiết bị vẫn xài mật khẩu mặc định, thiếu xác thực mạnh, không cập nhật firmware, truyền dữ liệu không mã hóa... dẫn tới nguy cơ bị truy cập trái phép, rò rỉ dữ liệu, chiếm quyền điều khiển thiết bị.

Đề tài tham chiếu hai nguồn chính:
- **OWASP IoT Security Project (2024)** — liệt kê các lỗ hổng phổ biến của IoT.
- **NIST SP 800-30 Rev.1 (2012)** — quy trình đánh giá rủi ro: nhận diện tài sản → xác định mối đe dọa → đánh giá tác động → đề xuất giảm thiểu.

Từ đó, đề tài xây dựng một **quy trình quản lý rủi ro bảo mật** cho hệ thống IoT quy mô nhỏ, gồm: nhận diện tài sản, phân tích mối đe dọa/lỗ hổng, đánh giá mức độ rủi ro, và đề xuất biện pháp giảm thiểu phù hợp với điều kiện triển khai thực tế.

### Vấn đề bảo mật cụ thể
Các tài sản cần bảo vệ trong hệ thống IoT quy mô nhỏ: thiết bị IoT (cảm biến, camera IP, gateway), dữ liệu cảm biến, tài khoản quản trị, firmware, hạ tầng mạng nội bộ, dịch vụ quản lý từ xa. Các mối đe dọa thường gặp: truy cập trái phép do mật khẩu yếu/mặc định, nghe lén dữ liệu, giả mạo thiết bị, khai thác firmware lỗi thời, cài mã độc, tấn công từ chối dịch vụ (DoS), thiếu giám sát hoạt động. Nếu không kiểm soát kịp thời, những rủi ro này ảnh hưởng trực tiếp tới 3 mục tiêu cốt lõi của an toàn thông tin: **tính bí mật – toàn vẹn – sẵn sàng**.

## 2. Mục tiêu đề tài

| Mã | Mục tiêu |
|---|---|
| MT-01 | Xác định và phân loại tài sản quan trọng trong hệ thống IoT quy mô nhỏ |
| MT-02 | Phân tích mối đe dọa, lỗ hổng bảo mật và mức độ ảnh hưởng lên từng tài sản |
| MT-03 | Xây dựng Risk Register + ma trận đánh giá rủi ro 5×5 |
| MT-04 | Đề xuất kế hoạch xử lý, giảm thiểu cho các rủi ro mức cao |
| MT-05 | Xây dựng checklist kiểm tra bảo mật định kỳ |

## 3. Đối tượng, phạm vi & giới hạn

- **Đối tượng:** hệ thống IoT quy mô nhỏ — cảm biến, camera IP, gateway, dữ liệu cảm biến, tài khoản quản trị, hạ tầng mạng.
- **Phạm vi:** phân tích trên mô hình IoT **giả lập**, dùng dữ liệu mẫu, tham chiếu OWASP IoT Security Project, NIST SP 800-30 và các tài liệu chuyên ngành liên quan.
- **Giới hạn:** **không** tấn công/khai thác thiết bị IoT thật, **không** thu thập dữ liệu cá nhân người dùng, **không** kiểm thử ngoài phạm vi cho phép. Trọng tâm là nhận diện – đánh giá – quản lý rủi ro, chứ không phải pentest thực chiến.

## 4. Sản phẩm dự kiến của đề tài

- Sơ đồ kiến trúc tổng thể hệ thống IoT quy mô nhỏ
- Danh sách tài sản cần bảo vệ
- Risk Register (tối thiểu 15 rủi ro bảo mật)
- Ma trận đánh giá rủi ro 5×5
- Kế hoạch xử lý cho 5 rủi ro mức cao nhất
- Checklist kiểm tra bảo mật định kỳ
- README này — mô tả phạm vi, nguồn tham khảo và hướng dẫn sử dụng sản phẩm của đề tài

## 5. Cơ sở lý thuyết

### 5.1. Kiến trúc hệ thống tham chiếu

Mô hình nhiều lớp, phổ biến trong hộ gia đình / phòng lab / doanh nghiệp nhỏ:

```
Thiết bị IoT → Gateway → Server/Cloud → Ứng dụng quản lý → Người quản trị
```

- **Device Layer:** cảm biến nhiệt độ/độ ẩm, camera IP, bộ điều khiển — tài nguyên phần cứng hạn chế nên dễ dính lỗi bảo mật nếu cấu hình sai.
- **Gateway:** trung gian giữa thiết bị và hệ thống quản lý, xử lý chuyển đổi giao thức, kiểm soát lưu lượng — vì là điểm tập trung giao tiếp nên rủi ro cao, cần xác thực/phân quyền/mã hóa chặt.
- **Server/Cloud:** lưu trữ, xử lý dữ liệu, cung cấp giao diện quản trị qua web/app.
- **Trust Boundary:** ranh giới tin cậy nằm giữa mạng nội bộ ↔ Internet, và giữa gateway ↔ server — dữ liệu qua ranh giới này cần mã hóa, xác thực, kiểm soát truy cập.

### 5.2. Các khái niệm bảo mật nền tảng

- **Tài sản (Asset):** thiết bị IoT, gateway, dữ liệu cảm biến, tài khoản quản trị, firmware, khóa mã hóa, hạ tầng mạng.
- **Mối đe dọa (Threat):** truy cập trái phép, giả mạo thiết bị, mã độc, DoS, nghe lén dữ liệu...
- **Lỗ hổng (Vulnerability):** mật khẩu mặc định, firmware chưa cập nhật, cấu hình sai, giao tiếp không mã hóa.
- **Rủi ro (Risk):** khả năng một threat khai thác thành công một vulnerability và gây thiệt hại cho asset. Công thức dùng xuyên suốt đề tài:

  **Risk = Likelihood × Impact**

- **Mô hình CIA:**
  - *Confidentiality* — dữ liệu chỉ truy cập được bởi người được phép.
  - *Integrity* — dữ liệu không bị sửa đổi trái phép.
  - *Availability* — hệ thống luôn sẵn sàng phục vụ khi cần.
- **Authentication & Authorization:** xác thực danh tính trước, rồi mới phân quyền chức năng được phép dùng.
- **Firmware:** chương trình điều khiển cài trên thiết bị — lỗ hổng/không cập nhật là cửa ngõ bị chiếm quyền điều khiển.

### 5.3. Trọng tâm theo hướng đề tài (Hướng G — Quản trị rủi ro, chính sách, checklist, kiểm thử)

- Quy trình quản lý rủi ro cho IoT quy mô nhỏ
- Nhận diện tài sản & xác định giá trị tài sản
- Nhận diện mối đe dọa & lỗ hổng
- Xây dựng Risk Register
- Đánh giá rủi ro bằng ma trận 5×5
- Áp dụng OWASP ISVS, OWASP ISTG, NIST SP 800-30
- Checklist kiểm tra bảo mật định kỳ
- Đề xuất quy trình xử lý/giảm thiểu rủi ro

### 5.4. Chuẩn, công cụ & nguồn tham khảo chính

| # | Chuẩn / Công cụ | Mục đích |
|---|---|---|
| 1 | OWASP IoT Security Project | Rủi ro & lỗ hổng phổ biến của thiết bị IoT |
| 2 | OWASP IoT Security Verification Standard (ISVS) | Đánh giá yêu cầu bảo mật hệ thống IoT |
| 3 | OWASP IoT Security Testing Guide (ISTG) | Hướng dẫn kiểm thử bảo mật thiết bị IoT |
| 4 | NIST SP 800-30 | Phương pháp đánh giá & quản lý rủi ro |
| 5 | NISTIR 8259 | Yêu cầu an toàn cho thiết bị IoT |
| 6 | OWASP IoTGoat | Mô hình tham khảo phục vụ nghiên cứu |
| 7 | Eclipse Mosquitto MQTT | Mô phỏng giao thức truyền thông MQTT |

### 5.5. Công trình/giải pháp liên quan

- **OWASP IoT Security Project:** tài liệu phổ biến nhất, liệt kê lỗ hổng đặc thù IoT (mật khẩu mặc định, dịch vụ mạng không an toàn, thiếu update firmware...) nhưng chưa có quy trình đánh giá rủi ro chi tiết cho từng hệ thống cụ thể.
- **NIST Cybersecurity Framework (CSF):** 5 nhóm chức năng — Identify, Protect, Detect, Respond, Recover — giúp quản lý rủi ro có hệ thống, nhưng cần điều chỉnh cho phù hợp hệ thống IoT nhỏ, ít tài nguyên.
- **NISTIR 8259:** yêu cầu bảo mật cơ bản cho thiết bị IoT (quản lý định danh, kiểm soát truy cập, cập nhật phần mềm, bảo vệ dữ liệu, ghi log) — nền tảng để xây checklist bảo mật của đề tài.

→ Đề tài kế thừa OWASP + NIST để xây mô hình quản lý rủi ro phù hợp hệ thống IoT quy mô nhỏ.

## 6. Phương pháp & thiết kế

### 6.1. Phương pháp thực hiện

Kết hợp quản lý rủi ro bảo mật với **phân tích định tính (Qualitative Risk Assessment)** — phù hợp hệ thống nhỏ, ít thiết bị, chưa đủ dữ liệu thống kê để đánh giá định lượng. Cách tiếp cận: **Asset-Based Risk Assessment** — mỗi tài sản được phân tích theo threat/vulnerability/impact riêng để xác định độ ưu tiên xử lý.

Các bước nghiên cứu:
1. Xác định phạm vi hệ thống IoT cần đánh giá
2. Xác định & phân loại tài sản cần bảo vệ
3. Nhận diện mối đe dọa & lỗ hổng bảo mật
4. Đánh giá khả năng xảy ra & mức độ ảnh hưởng của từng rủi ro
5. Xây dựng Risk Register + ma trận đánh giá rủi ro 5×5
6. Đề xuất biện pháp giảm thiểu cho rủi ro ưu tiên cao
7. Đánh giá rủi ro còn lại sau khi áp dụng kiểm soát

### 6.2. Mô hình/kiến trúc đề xuất

Mô phỏng hệ thống IoT quy mô nhỏ gồm: thiết bị IoT, gateway, mạng truyền thông, máy chủ quản lý, người quản trị — mô hình phổ biến ở hộ gia đình/phòng lab/doanh nghiệp nhỏ.

Các lớp bảo mật được xem xét trong kiến trúc:
- Bảo mật thiết bị IoT
- Bảo mật gateway
- Bảo mật mạng truyền thông
- Bảo mật máy chủ & cơ sở dữ liệu
- Bảo mật ứng dụng quản lý
- Quản lý người dùng & phân quyền truy cập

### 6.3. Môi trường, công cụ & dữ liệu

Thực hiện trên môi trường **mô phỏng**, dữ liệu giả lập, không đụng tới hệ thống thật.

| Công cụ | Mục đích |
|---|---|
| Microsoft Word | Soạn thảo báo cáo |
| Draw.io | Thiết kế sơ đồ kiến trúc & quy trình |
| Microsoft Excel | Xây dựng Risk Register & ma trận rủi ro |
| GitHub | Quản lý tài liệu & lưu trữ sản phẩm |
| OWASP IoT Security | Tham khảo lỗ hổng & hướng dẫn bảo mật |
| NIST SP 800-30 | Hướng dẫn đánh giá rủi ro |
| NISTIR 8259 | Yêu cầu bảo mật thiết bị IoT |

Môi trường máy tính cá nhân chạy Windows + các phần mềm hỗ trợ thiết kế/soạn tài liệu/phân tích dữ liệu.

### 6.4. Quy trình triển khai & đánh giá (6 bước)

1. **Xây dựng mô hình hệ thống IoT** — xác định các thành phần: thiết bị, gateway, máy chủ, ứng dụng quản lý.
2. **Xác định tài sản cần bảo vệ** — liệt kê thiết bị, dữ liệu, tài khoản quản trị, firmware, cơ sở dữ liệu.
3. **Nhận diện mối đe dọa & lỗ hổng** — phân tích nguy cơ cho từng tài sản, xác định điểm yếu có thể bị khai thác.
4. **Đánh giá mức độ rủi ro** theo công thức `Risk = Likelihood × Impact` (Likelihood = khả năng xảy ra, Impact = mức độ ảnh hưởng).
5. **Đề xuất biện pháp giảm thiểu** — giải pháp kỹ thuật & quản lý để giảm khả năng xảy ra hoặc mức độ ảnh hưởng.
6. **Đánh giá rủi ro còn lại** — sau khi áp dụng kiểm soát, đánh giá lại mức rủi ro còn tồn đọng và khả năng chấp nhận được của hệ thống.

### 6.5. Tiêu chí đánh giá hiệu quả mô hình

- Mức độ đầy đủ của danh sách tài sản cần bảo vệ
- Khả năng nhận diện đầy đủ mối đe dọa & lỗ hổng
- Tính chính xác của quá trình đánh giá mức độ rủi ro
- Tính hợp lý của Risk Register & ma trận rủi ro 5×5
- Hiệu quả của các biện pháp giảm thiểu đề xuất
- Khả năng áp dụng checklist bảo mật vào hệ thống IoT quy mô nhỏ
- Khả năng mở rộng mô hình sang các hệ thống IoT khác

## 7. Kết quả & đánh giá (đang triển khai — hoàn thiện ở các buổi tiếp theo)

- **Chương 4 — Triển khai & kết quả:** chuẩn bị môi trường, xây dựng thành phần sản phẩm (sơ đồ kiến trúc, danh sách tài sản, Risk Register, ma trận 5×5, checklist), kịch bản thử nghiệm trên hệ thống IoT giả lập, kết quả và thảo luận/hạn chế.
- **Chương 5 — Đánh giá bảo mật:** tài sản & dữ liệu, mối đe dọa & lỗ hổng, ma trận rủi ro 5×5, biện pháp giảm thiểu, rủi ro còn lại.
- **Chương 6 — Kết luận & hướng phát triển:** tổng kết kết quả đạt được, hạn chế của đề tài (phạm vi, môi trường, dữ liệu), hướng mở rộng — áp dụng mô hình cho hệ thống IoT thực tế, tích hợp công cụ giám sát bảo mật, bổ sung đánh giá định lượng, tự động hóa quy trình quản lý rủi ro.

## 8. Cấu trúc báo cáo (6 chương)

| Chương | Nội dung |
|---|---|
| 1 | Tổng quan đề tài — bối cảnh, mục tiêu, phạm vi, sản phẩm dự kiến |
| 2 | Cơ sở lý thuyết & tài liệu liên quan |
| 3 | Phương pháp & thiết kế |
| 4 | Triển khai & kết quả |
| 5 | Đánh giá bảo mật |
| 6 | Kết luận & hướng phát triển |

## 9. Danh mục từ viết tắt

| Viết tắt | Ý nghĩa |
|---|---|
| IoT | Internet of Things |
| CIA | Confidentiality – Integrity – Availability |
| MFA | Multi-Factor Authentication |
| VPN | Virtual Private Network |
| TLS | Transport Layer Security |
| HTTPS | HyperText Transfer Protocol Secure |
| MQTT | Message Queuing Telemetry Transport |
| OWASP | Open Worldwide Application Security Project |
| NIST | National Institute of Standards and Technology |
| ISVS | IoT Security Verification Standard |

## 10. Tiến độ tuần 02 (nhật ký cập nhật)

**Góp ý từ giảng viên (báo cáo lần 1) → đã xử lý:**
- Bổ sung bối cảnh & mục tiêu nghiên cứu → hoàn thiện Chương 1
- Viết lại cơ sở lý thuyết theo văn phong báo cáo → hoàn thiện Chương 2
- Bổ sung sơ đồ kiến trúc hệ thống → thiết kế sơ đồ IoT
- Bổ sung quy trình quản lý rủi ro → thiết kế sơ đồ quy trình
- Chuẩn bị dàn ý Chương 3–6 → hoàn thiện cấu trúc báo cáo

**Minh chứng tuần 02:**

| ID | Loại | File/link | Nội dung |
|---|---|---|---|
| MC-01 | Báo cáo | BaoCao_Tuan02.docx | Hoàn thiện Chương 1 |
| MC-02 | Hình ảnh | KienTruc_IoT.png | Sơ đồ kiến trúc hệ thống IoT |
| MC-03 | Hình ảnh | QuyTrinh_Risk.png | Quy trình quản lý rủi ro |
| MC-04 | Tài liệu | RiskRegister.xlsx | Khung đánh giá rủi ro |
| MC-05 | GitHub | README.md | README & tài liệu tham khảo |

**Cam kết trước Buổi 03:**
- Hoàn thiện Chương 3, xây dựng mô hình quản lý rủi ro cho hệ thống IoT quy mô nhỏ
- Sản phẩm dự kiến: sơ đồ kiến trúc chi tiết, quy trình đánh giá rủi ro, Risk Register mẫu, ma trận rủi ro 5×5, checklist bảo mật
- Cần giảng viên góp ý về: mô hình đánh giá rủi ro, tính phù hợp của Risk Register, tiêu chí đánh giá bảo mật

## 11. Tài liệu tham khảo

- OWASP IoT Security Project (2024)
- OWASP IoT Security Verification Standard (ISVS)
- OWASP IoT Security Testing Guide (ISTG)
- NIST SP 800-30 Rev.1 (2012) — *Guide for Conducting Risk Assessments*
- NISTIR 8259 — *Foundational Cybersecurity Activities for IoT Device Manufacturers*
- OWASP IoTGoat
- Eclipse Mosquitto MQTT

---

