# DeTai35-IoT-Security-Risk-Management

# Quản lý rủi ro bảo mật cho hệ thống IoT quy mô nhỏ



**Tiểu luận kết thúc học phần — Bảo mật IoT (INT4410)**

Trường Đại học Văn Hiến — Khoa Công nghệ Thông tin

Sinh viên thực hiện: Võ Nguyễn Duyên — MSSV: 231A010722

Giảng viên hướng dẫn: Hồ Nhựt Minh
----
CHƯƠNG 1. TỔNG QUAN ĐỀ TÀI
1.1. Bối cảnh và lý do chọn đề tài
Internet of Things (IoT) đang phát triển mạnh mẽ và trở thành một trong những công nghệ quan trọng của cuộc Cách mạng công nghiệp lần thứ tư. Các hệ thống IoT được ứng dụng rộng rãi trong nhiều lĩnh vực như nhà thông minh, nông nghiệp thông minh, y tế, giáo dục, giao thông và doanh nghiệp. Thông qua các thiết bị cảm biến, camera IP, bộ điều khiển và gateway, hệ thống IoT có khả năng thu thập, truyền tải và xử lý dữ liệu theo thời gian thực, góp phần nâng cao hiệu quả quản lý, giảm chi phí vận hành và hỗ trợ quá trình ra quyết định.
Tuy nhiên, cùng với sự phát triển nhanh chóng đó, các hệ thống IoT, đặc biệt là các hệ thống quy mô nhỏ, đang phải đối mặt với nhiều nguy cơ mất an toàn thông tin. Do hạn chế về chi phí đầu tư, năng lực quản trị và tài nguyên phần cứng, nhiều thiết bị IoT vẫn sử dụng mật khẩu mặc định, thiếu cơ chế xác thực mạnh, không được cập nhật firmware thường xuyên hoặc truyền dữ liệu mà chưa áp dụng các cơ chế mã hóa phù hợp. Những điểm yếu này làm gia tăng nguy cơ bị truy cập trái phép, rò rỉ dữ liệu, chiếm quyền điều khiển thiết bị hoặc trở thành mục tiêu của các cuộc tấn công mạng.
Theo OWASP Internet of Things Security Project (OWASP, 2024), các lỗ hổng phổ biến của hệ thống IoT bao gồm sử dụng mật khẩu mặc định, thiếu cơ chế cập nhật firmware và cấu hình không an toàn. Theo NIST SP 800-30 Revision 1 (NIST, 2012), việc đánh giá rủi ro cần thực hiện thông qua quá trình nhận diện tài sản, xác định mối đe dọa, đánh giá tác động và đề xuất biện pháp giảm thiểu.
Xuất phát từ những vấn đề trên, việc nghiên cứu đề tài "Quản lý rủi ro bảo mật cho hệ thống IoT quy mô nhỏ" là cần thiết nhằm xây dựng quy trình nhận diện tài sản, phân tích các mối đe dọa và lỗ hổng bảo mật, đánh giá mức độ rủi ro, từ đó đề xuất các biện pháp giảm thiểu phù hợp với điều kiện triển khai thực tế của các hệ thống IoT quy mô nhỏ
1.2. Phát biểu vấn đề bảo mật
Trong các hệ thống IoT quy mô nhỏ, nhiều thành phần quan trọng cần được bảo vệ nhằm đảm bảo hoạt động ổn định và an toàn của hệ thống. Các tài sản chính bao gồm thiết bị IoT (cảm biến, camera IP, gateway), dữ liệu cảm biến, tài khoản quản trị, firmware thiết bị, hệ thống mạng nội bộ và các dịch vụ quản lý từ xa. Đây đều là những thành phần có giá trị và có thể trở thành mục tiêu của các cuộc tấn công mạng.
Các mối đe dọa phổ biến đối với hệ thống IoT bao gồm truy cập trái phép do sử dụng mật khẩu yếu hoặc mặc định, nghe lén dữ liệu trong quá trình truyền tải, giả mạo thiết bị, khai thác lỗ hổng từ firmware lỗi thời, cài đặt mã độc, tấn công từ chối dịch vụ (DoS) và thiếu cơ chế giám sát hoạt động của hệ thống. Những lỗ hổng này có thể làm giảm mức độ an toàn của hệ thống, gây mất dữ liệu hoặc làm gián đoạn quá trình vận hành.
Nếu không được đánh giá và kiểm soát kịp thời, các rủi ro trên sẽ ảnh hưởng trực tiếp đến ba mục tiêu cốt lõi của an toàn thông tin gồm tính bí mật, tính toàn vẹn và tính sẵn sàng của hệ thống IoT. Bên cạnh đó, nhiều hệ thống IoT quy mô nhỏ hiện nay vẫn chưa áp dụng quy trình quản lý rủi ro một cách đầy đủ, dẫn đến khó khăn trong việc xác định mức độ ưu tiên và lựa chọn biện pháp xử lý phù hợp.
Vì vậy, đề tài tập trung xây dựng mô hình quản lý rủi ro bảo mật cho hệ thống IoT quy mô nhỏ thông qua việc xác định tài sản cần bảo vệ, nhận diện các mối đe dọa và lỗ hổng, xây dựng Risk Register, đánh giá mức độ rủi ro bằng ma trận 5×5 và đề xuất các biện pháp giảm thiểu phù hợp.
1.3. Mục tiêu của đề tài
Đề tài được thực hiện nhằm đạt được các mục tiêu sau:
MT-01: Xác định và phân loại các tài sản quan trọng trong hệ thống IoT quy mô nhỏ làm cơ sở cho quá trình đánh giá rủi ro.
MT-02: Phân tích các mối đe dọa, lỗ hổng bảo mật và đánh giá mức độ ảnh hưởng đối với từng tài sản của hệ thống.
MT-03: Xây dựng Risk Register và ma trận đánh giá rủi ro 5×5 để xác định mức độ ưu tiên xử lý các rủi ro.
MT-04: Đề xuất kế hoạch xử lý và các biện pháp giảm thiểu đối với các rủi ro có mức độ cao nhằm nâng cao khả năng bảo vệ hệ thống.
MT-05: Xây dựng checklist kiểm tra bảo mật định kỳ giúp hỗ trợ quá trình quản trị và duy trì an toàn cho hệ thống IoT quy mô nhỏ.
1.4. Đối tượng, phạm vi và giới hạn an toàn
Đối tượng nghiên cứu
Đối tượng nghiên cứu của đề tài là hệ thống IoT quy mô nhỏ, bao gồm các thiết bị cảm biến, camera IP, gateway, dữ liệu cảm biến, tài khoản quản trị và hạ tầng mạng phục vụ việc truyền nhận dữ liệu giữa các thiết bị.
Phạm vi nghiên cứu
Đề tài tập trung phân tích mô hình hệ thống IoT giả lập, sử dụng dữ liệu mẫu và tham khảo các tiêu chuẩn, hướng dẫn bảo mật của OWASP IoT Security Project, NIST SP 800-30 và các tài liệu chuyên ngành liên quan để đánh giá rủi ro và đề xuất giải pháp bảo mật.
Giới hạn của đề tài
Đề tài không thực hiện các hoạt động tấn công hoặc khai thác trên thiết bị IoT thực tế; không thu thập dữ liệu cá nhân của người dùng; không kiểm thử trên các hệ thống nằm ngoài phạm vi được phép. Nội dung nghiên cứu chủ yếu tập trung vào việc nhận diện, đánh giá và quản lý rủi ro bảo mật cho hệ thống IoT quy mô nhỏ.
1.5. Sản phẩm và kết quả dự kiến
Sau khi hoàn thành, đề tài dự kiến đạt được các sản phẩm sau:
•	Sơ đồ kiến trúc tổng thể của hệ thống IoT quy mô nhỏ. 
•	Danh sách các tài sản cần bảo vệ trong hệ thống. 
•	Risk Register gồm tối thiểu 15 rủi ro bảo mật. 
•	Ma trận đánh giá rủi ro 5×5. 
•	Kế hoạch xử lý và giảm thiểu đối với 5 rủi ro có mức độ cao. 
•	Checklist kiểm tra bảo mật định kỳ cho hệ thống IoT. 
•	README mô tả phạm vi nghiên cứu, nguồn tài liệu tham khảo và hướng dẫn sử dụng các sản phẩm của đề tài. 
1.6. Cấu trúc báo cáo
Báo cáo gồm sáu chương, được tổ chức theo trình tự từ cơ sở lý thuyết đến quá trình triển khai và đánh giá kết quả. Chương 1 trình bày tổng quan về đề tài, bối cảnh nghiên cứu, mục tiêu, phạm vi và các sản phẩm dự kiến. Chương 2 giới thiệu cơ sở lý thuyết, các khái niệm và các công trình nghiên cứu liên quan đến bảo mật IoT. Chương 3 trình bày phương pháp nghiên cứu và quy trình xây dựng mô hình quản lý rủi ro. Chương 4 mô tả quá trình triển khai, xây dựng Risk Register và các kết quả đạt được. Chương 5 đánh giá mức độ rủi ro, đề xuất các biện pháp giảm thiểu và checklist bảo mật. Cuối cùng, Chương 6 tổng kết những kết quả đạt được, các hạn chế của đề tài và định hướng phát triển trong tương lai.
Bảng 1.1. Đối chiếu mục tiêu và đầu ra của đề tài
Mục tiêu	Đầu ra tương ứng	Cách kiểm chứng	Chương trình bày
MT-01	Danh sách tài sản cần bảo vệ	Bảng tài sản IoT	Chương 4
MT-02	Danh sách mối đe dọa và lỗ hổng	Risk Register	Chương 4
MT-03	Ma trận đánh giá rủi ro 5×5	Bảng điểm rủi ro	Chương 5
MT-04	Kế hoạch xử lý rủi ro	Bảng biện pháp giảm thiểu	Chương 5
MT-05	Checklist kiểm tra bảo mật	Danh sách kiểm tra định kỳ	Chương 5

CHƯƠNG 2. CƠ SỞ LÝ THUYẾT VÀ TÀI LIỆU LIÊN QUAN
2.1. Kiến trúc hoặc bối cảnh kỹ thuật của hệ thống
Hệ thống IoT quy mô nhỏ trong phạm vi đề tài được xây dựng theo mô hình nhiều lớp, bao gồm các thiết bị IoT, gateway, mạng truyền thông, máy chủ lưu trữ và ứng dụng quản lý. Kiến trúc này phản ánh mô hình triển khai phổ biến trong các hộ gia đình, phòng thí nghiệm và doanh nghiệp nhỏ, nơi các thiết bị kết nối Internet để thu thập và trao đổi dữ liệu phục vụ quá trình giám sát và điều khiển.
Ở lớp thiết bị (Device Layer), các cảm biến nhiệt độ, độ ẩm, camera IP và các bộ điều khiển có nhiệm vụ thu thập dữ liệu từ môi trường hoặc thực hiện các thao tác điều khiển. Các thiết bị này thường có tài nguyên phần cứng hạn chế nên dễ gặp các vấn đề về bảo mật nếu không được cấu hình đúng cách.
Gateway đóng vai trò là trung gian giữa các thiết bị IoT và hệ thống quản lý. Thành phần này chịu trách nhiệm thu thập dữ liệu từ các thiết bị, thực hiện chuyển đổi giao thức khi cần thiết, kiểm soát lưu lượng và truyền dữ liệu đến máy chủ thông qua mạng Internet hoặc mạng nội bộ. Do gateway là điểm tập trung của quá trình giao tiếp nên đây cũng là thành phần có mức độ rủi ro cao và cần được bảo vệ bằng các cơ chế xác thực, phân quyền và mã hóa.
Máy chủ (Server hoặc Cloud) tiếp nhận dữ liệu từ gateway để lưu trữ, xử lý và cung cấp các dịch vụ quản lý. Thông qua giao diện web hoặc ứng dụng di động, người quản trị có thể theo dõi trạng thái thiết bị, xem dữ liệu cảm biến, cấu hình hệ thống và thực hiện các thao tác quản trị từ xa.
Trong kiến trúc này, ranh giới tin cậy (Trust Boundary) được xác định giữa mạng nội bộ và Internet, cũng như giữa gateway với máy chủ quản lý. Dữ liệu khi vượt qua ranh giới tin cậy cần được bảo vệ bằng các cơ chế mã hóa, xác thực người dùng và kiểm soát truy cập nhằm hạn chế nguy cơ nghe lén, giả mạo hoặc truy cập trái phép.
 
Hình 2.1. Kiến trúc tổng thể hệ thống IoT quy mô nhỏ
2.2. Khái niệm bảo mật trực tiếp liên quan
Để đánh giá rủi ro cho hệ thống IoT quy mô nhỏ, đề tài sử dụng một số khái niệm bảo mật nền tảng làm cơ sở cho quá trình phân tích và xây dựng giải pháp.
Tài sản (Asset)
Tài sản là những thành phần có giá trị cần được bảo vệ trong hệ thống. Đối với hệ thống IoT, tài sản bao gồm thiết bị IoT, gateway, dữ liệu cảm biến, tài khoản quản trị, firmware, khóa mã hóa và hạ tầng mạng.
Mối đe dọa (Threat)
Mối đe dọa là các sự kiện hoặc hành động có khả năng khai thác điểm yếu của hệ thống và gây ảnh hưởng đến hoạt động bình thường. Một số mối đe dọa phổ biến gồm truy cập trái phép, giả mạo thiết bị, phát tán mã độc, tấn công từ chối dịch vụ (DoS) và nghe lén dữ liệu.
Lỗ hổng (Vulnerability)
Lỗ hổng là điểm yếu tồn tại trong thiết bị, phần mềm hoặc quy trình quản lý có thể bị kẻ tấn công khai thác. Ví dụ như sử dụng mật khẩu mặc định, firmware chưa cập nhật, cấu hình sai hoặc giao tiếp không được mã hóa.
Rủi ro (Risk)
Rủi ro là khả năng xảy ra sự cố bảo mật khi một mối đe dọa khai thác thành công lỗ hổng của hệ thống và gây ra thiệt hại đối với tài sản.
Trong đề tài, mức độ rủi ro được đánh giá theo công thức:
Risk = Likelihood × Impact
trong đó Likelihood là khả năng xảy ra và Impact là mức độ ảnh hưởng của sự cố.
Mô hình CIA
Mô hình CIA là nền tảng của an toàn thông tin, bao gồm ba thuộc tính cơ bản:
•	Confidentiality (Tính bí mật): Đảm bảo dữ liệu chỉ được truy cập bởi các đối tượng được phép. 
•	Integrity (Tính toàn vẹn): Đảm bảo dữ liệu không bị thay đổi trái phép trong quá trình lưu trữ hoặc truyền tải. 
•	Availability (Tính sẵn sàng): Đảm bảo hệ thống luôn sẵn sàng phục vụ người dùng khi cần thiết. 
Xác thực và phân quyền
Xác thực (Authentication) là quá trình kiểm tra danh tính của người dùng hoặc thiết bị trước khi cho phép truy cập hệ thống. Sau khi xác thực thành công, cơ chế phân quyền (Authorization) sẽ quyết định các chức năng mà người dùng được phép thực hiện.
Firmware
Firmware là chương trình điều khiển được cài đặt trực tiếp trên thiết bị IoT. Nếu firmware tồn tại lỗ hổng hoặc không được cập nhật định kỳ thì thiết bị rất dễ bị khai thác và chiếm quyền điều khiển.
2.3. Nội dung cần nhấn mạnh theo nhóm đề tài
Đề tài thuộc Hướng G – Quản trị rủi ro, chính sách, checklist và kiểm thử, vì vậy nội dung trọng tâm của chương này tập trung vào các phương pháp quản lý rủi ro và các tiêu chuẩn bảo mật dành cho hệ thống IoT.
Các nội dung chính bao gồm:
•	Quy trình quản lý rủi ro đối với hệ thống IoT quy mô nhỏ. 
•	Phương pháp nhận diện tài sản và xác định giá trị tài sản. 
•	Phương pháp nhận diện mối đe dọa và lỗ hổng bảo mật. 
•	Xây dựng Risk Register phục vụ đánh giá rủi ro. 
•	Phương pháp đánh giá rủi ro bằng ma trận 5×5. 
•	Áp dụng các hướng dẫn của OWASP ISVS, OWASP ISTG và NIST SP 800-30. 
•	Xây dựng checklist kiểm tra bảo mật định kỳ. 
•	Đề xuất quy trình xử lý và giảm thiểu rủi ro cho hệ thống IoT.

 
Hình 2.2. Quy trình quản lý rủi ro


2.4. Chuẩn, công cụ và nguồn GitHub chính
STT	Chuẩn/Công cụ	Mục đích sử dụng
1	OWASP IoT Security Project	Tham khảo các rủi ro và lỗ hổng phổ biến của thiết bị IoT
2	OWASP IoT Security Verification Standard (ISVS)	Đánh giá các yêu cầu bảo mật của hệ thống IoT
3	OWASP IoT Security Testing Guide (ISTG)	Hướng dẫn kiểm thử bảo mật thiết bị IoT
4	NIST SP 800-30	Phương pháp đánh giá và quản lý rủi ro
5	NISTIR 8259	Yêu cầu an toàn cho thiết bị IoT
6	OWASP IoTGoat	Mô hình tham khảo phục vụ nghiên cứu
7	Eclipse Mosquitto MQTT	Mô phỏng giao thức truyền thông MQTT

2.5. Công trình hoặc giải pháp liên quan
Nhiều nghiên cứu và hướng dẫn đã được công bố nhằm nâng cao mức độ an toàn cho các hệ thống IoT. Trong đó, OWASP IoT Security Project là một trong những tài liệu được sử dụng rộng rãi, cung cấp danh sách các lỗ hổng và rủi ro phổ biến như mật khẩu mặc định, dịch vụ mạng không an toàn, thiếu cơ chế cập nhật firmware và bảo vệ dữ liệu chưa đầy đủ. Ưu điểm của tài liệu này là tập trung trực tiếp vào các vấn đề bảo mật đặc thù của IoT, tuy nhiên chưa đưa ra quy trình đánh giá rủi ro chi tiết cho từng hệ thống cụ thể.
Bên cạnh đó, NIST Cybersecurity Framework (CSF) cung cấp mô hình quản lý rủi ro gồm năm nhóm chức năng: Identify, Protect, Detect, Respond và Recover. Khung làm việc này giúp các tổ chức xây dựng quy trình quản lý rủi ro một cách có hệ thống, tuy nhiên cần được điều chỉnh để phù hợp với các hệ thống IoT quy mô nhỏ có nguồn lực hạn chế.
Ngoài ra, NISTIR 8259 đưa ra các yêu cầu bảo mật cơ bản đối với thiết bị IoT như quản lý định danh, kiểm soát truy cập, cập nhật phần mềm, bảo vệ dữ liệu và ghi nhật ký hoạt động. Đây là nền tảng quan trọng để xây dựng checklist kiểm tra bảo mật trong đề tài.
Đề tài kế thừa các hướng dẫn của OWASP và NIST để xây dựng mô hình quản lý rủi ro phù hợp với hệ thống IoT quy mô nhỏ, bao gồm nhận diện tài sản, phân tích mối đe dọa, xây dựng Risk Register, đánh giá rủi ro theo ma trận 5×5 và đề xuất các biện pháp giảm thiểu.
2.6. Tiểu kết Chương 2
Chương 2 đã trình bày cơ sở lý thuyết làm nền tảng cho quá trình nghiên cứu của đề tài. Nội dung bao gồm kiến trúc tổng thể của hệ thống IoT quy mô nhỏ, các khái niệm bảo mật quan trọng như tài sản, mối đe dọa, lỗ hổng, rủi ro, mô hình CIA, xác thực và firmware. Đồng thời, chương cũng giới thiệu các tiêu chuẩn và hướng dẫn bảo mật phổ biến như OWASP IoT Security Project, OWASP ISVS, OWASP ISTG và NIST SP 800-30 để làm cơ sở cho việc đánh giá rủi ro.
Những kiến thức và tài liệu được trình bày trong chương này sẽ là nền tảng để Chương 3 xây dựng phương pháp nghiên cứu, thiết kế quy trình quản lý rủi ro và triển khai mô hình đánh giá bảo mật cho hệ thống IoT quy mô nhỏ.
CHƯƠNG 3. PHƯƠNG PHÁP VÀ THIẾT KẾ
Chương này trình bày phương pháp nghiên cứu, mô hình hệ thống, môi trường triển khai và quy trình đánh giá rủi ro được sử dụng trong đề tài. Nội dung được xây dựng dựa trên các hướng dẫn của OWASP IoT Security Project, OWASP IoT Security Verification Standard (ISVS) và NIST SP 800-30 nhằm đảm bảo quá trình đánh giá rủi ro có tính hệ thống, phù hợp với các hệ thống IoT quy mô nhỏ.
3.1. Phương pháp thực hiện
Đề tài áp dụng phương pháp quản lý rủi ro bảo mật kết hợp với phương pháp phân tích định tính (Qualitative Risk Assessment) để nhận diện và đánh giá các nguy cơ đối với hệ thống IoT quy mô nhỏ. Phương pháp này phù hợp với các hệ thống có quy mô nhỏ, số lượng thiết bị không lớn và chưa có đầy đủ dữ liệu thống kê để thực hiện đánh giá định lượng.
Quá trình nghiên cứu được thực hiện theo các bước sau:
•	Xác định phạm vi của hệ thống IoT cần đánh giá. 
•	Xác định và phân loại các tài sản cần bảo vệ. 
•	Nhận diện các mối đe dọa và lỗ hổng bảo mật. 
•	Đánh giá khả năng xảy ra và mức độ ảnh hưởng của từng rủi ro. 
•	Xây dựng bảng Risk Register và ma trận đánh giá rủi ro 5×5. 
•	Đề xuất các biện pháp giảm thiểu đối với các rủi ro có mức ưu tiên cao. 
•	Đánh giá rủi ro còn lại sau khi áp dụng các biện pháp kiểm soát. 
Việc đánh giá rủi ro được thực hiện theo hướng tiếp cận dựa trên tài sản (Asset-Based Risk Assessment), trong đó mỗi tài sản sẽ được phân tích dựa trên các mối đe dọa, lỗ hổng và tác động có thể xảy ra nhằm xác định mức độ ưu tiên xử lý.
3.2. Mô hình/kiến trúc đề xuất
Mô hình nghiên cứu của đề tài mô phỏng một hệ thống IoT quy mô nhỏ gồm các thành phần cơ bản như thiết bị IoT, gateway, mạng truyền thông, máy chủ quản lý và người quản trị hệ thống. Đây là mô hình phổ biến được triển khai trong các hộ gia đình, phòng thí nghiệm và doanh nghiệp nhỏ.
Trong mô hình này, các thiết bị IoT có nhiệm vụ thu thập dữ liệu từ môi trường và truyền dữ liệu đến gateway thông qua các giao thức truyền thông phù hợp. Gateway tiếp nhận dữ liệu, thực hiện xử lý sơ bộ và gửi đến máy chủ để lưu trữ, phân tích và cung cấp cho ứng dụng quản lý. Người quản trị sử dụng giao diện web hoặc ứng dụng di động để giám sát trạng thái thiết bị, theo dõi dữ liệu và thực hiện các thao tác quản trị.
Luồng truyền dữ liệu của hệ thống được mô tả như sau:
Thiết bị IoT → Gateway → Server/Cloud → Ứng dụng quản lý → Người quản trị
Để đảm bảo an toàn thông tin, đề tài xem xét các lớp bảo mật chính trong kiến trúc hệ thống gồm:
•	Bảo mật thiết bị IoT. 
•	Bảo mật gateway. 
•	Bảo mật mạng truyền thông. 
•	Bảo mật máy chủ và cơ sở dữ liệu. 
•	Bảo mật ứng dụng quản lý. 
•	Quản lý người dùng và phân quyền truy cập. 
 
Hình 3.1. Kiến trúc đề xuất của hệ thống IoT quy mô nhỏ
3.3. Môi trường, công cụ và dữ liệu
Quá trình nghiên cứu được thực hiện trên môi trường mô phỏng nhằm đảm bảo an toàn và không ảnh hưởng đến các hệ thống thực tế. Dữ liệu sử dụng trong đề tài là dữ liệu giả lập, phục vụ cho việc xây dựng mô hình và đánh giá rủi ro.
Các công cụ được sử dụng trong quá trình thực hiện gồm:
Công cụ	Mục đích sử dụng
Microsoft Word	Soạn thảo báo cáo
Draw.io	Thiết kế sơ đồ kiến trúc và quy trình
Microsoft Excel	Xây dựng Risk Register và ma trận rủi ro
GitHub	Quản lý tài liệu và lưu trữ sản phẩm
OWASP IoT Security	Tham khảo các lỗ hổng và hướng dẫn bảo mật
NIST SP 800-30	Hướng dẫn đánh giá rủi ro
NISTIR 8259	Tham khảo yêu cầu bảo mật thiết bị IoT
Môi trường thực hiện bao gồm máy tính cá nhân chạy hệ điều hành Windows và các phần mềm hỗ trợ thiết kế sơ đồ, xây dựng tài liệu và phân tích dữ liệu.
3.4. Quy trình triển khai và đánh giá
Quy trình thực hiện đề tài được xây dựng theo mô hình quản lý rủi ro gồm sáu bước liên tiếp nhằm đảm bảo việc đánh giá được thực hiện đầy đủ và có hệ thống.
Bước 1. Xây dựng mô hình hệ thống IoT
Xác định các thành phần của hệ thống, bao gồm thiết bị IoT, gateway, máy chủ và ứng dụng quản lý.
Bước 2. Xác định tài sản cần bảo vệ
Liệt kê các tài sản quan trọng như thiết bị, dữ liệu, tài khoản quản trị, firmware và cơ sở dữ liệu.
Bước 3. Nhận diện mối đe dọa và lỗ hổng
Phân tích các nguy cơ có thể xảy ra đối với từng tài sản, đồng thời xác định các điểm yếu có khả năng bị khai thác.
Bước 4. Đánh giá mức độ rủi ro
Mức độ rủi ro được xác định dựa trên công thức:
Risk = Likelihood × Impact
Trong đó:
•	Likelihood là khả năng xảy ra của rủi ro. 
•	Impact là mức độ ảnh hưởng khi rủi ro xảy ra. 
Bước 5. Đề xuất biện pháp giảm thiểu
Đề xuất các giải pháp kỹ thuật và quản lý nhằm giảm khả năng xảy ra hoặc giảm mức độ ảnh hưởng của từng rủi ro.
Bước 6. Đánh giá rủi ro còn lại
Sau khi áp dụng các biện pháp kiểm soát, tiến hành đánh giá lại để xác định mức độ rủi ro còn lại và khả năng chấp nhận của hệ thống.
 
Hình 3.2. Quy trình triển khai đánh giá rủi ro
3.5. Tiêu chí đánh giá
Để đánh giá hiệu quả của mô hình quản lý rủi ro, đề tài sử dụng các tiêu chí sau:
•	Mức độ đầy đủ của danh sách tài sản cần bảo vệ. 
•	Khả năng nhận diện đầy đủ các mối đe dọa và lỗ hổng bảo mật. 
•	Tính chính xác của quá trình đánh giá mức độ rủi ro. 
•	Tính hợp lý của Risk Register và ma trận rủi ro 5×5. 
•	Hiệu quả của các biện pháp giảm thiểu được đề xuất. 
•	Khả năng áp dụng checklist bảo mật vào hệ thống IoT quy mô nhỏ. 
•	Khả năng mở rộng mô hình quản lý rủi ro đối với các hệ thống IoT khác. 
Kết quả đánh giá sẽ được trình bày và phân tích chi tiết trong Chương 4 và Chương 5, làm cơ sở để đánh giá hiệu quả của mô hình quản lý rủi ro và đề xuất các hướng cải tiến trong tương lai.
CHƯƠNG 4. TRIỂN KHAI VÀ KẾT QUẢ
CHƯƠNG 4. TRIỂN KHAI VÀ KẾT QUẢ
Chương này sẽ trình bày quá trình triển khai mô hình quản lý rủi ro bảo mật cho hệ thống IoT quy mô nhỏ, bao gồm việc chuẩn bị môi trường, xây dựng các thành phần của hệ thống, thực hiện đánh giá rủi ro và phân tích kết quả đạt được. Nội dung chi tiết sẽ được hoàn thiện ở buổi học tiếp theo.
4.1. Chuẩn bị môi trường
Nội dung mục này sẽ trình bày môi trường triển khai của đề tài, bao gồm các công cụ sử dụng, dữ liệu mô phỏng, cấu hình hệ thống và các tài liệu tham khảo phục vụ quá trình đánh giá rủi ro.
4.2. Thành phần sản phẩm
Mục này sẽ mô tả các sản phẩm được xây dựng trong đề tài như sơ đồ kiến trúc hệ thống, danh sách tài sản cần bảo vệ, Risk Register, ma trận đánh giá rủi ro 5×5, checklist kiểm tra bảo mật và các tài liệu hướng dẫn liên quan.
4.3. Kịch bản thử nghiệm và áp dụng
Nội dung sẽ trình bày các kịch bản đánh giá rủi ro được xây dựng trên hệ thống IoT giả lập, bao gồm việc nhận diện tài sản, phân tích mối đe dọa, đánh giá mức độ rủi ro và kiểm tra hiệu quả của các biện pháp giảm thiểu.
4.4. Kết quả
Mục này sẽ trình bày các kết quả đạt được sau quá trình triển khai như bảng đánh giá rủi ro, Risk Register, ma trận rủi ro và các minh chứng phục vụ việc đánh giá hiệu quả của mô hình.
4.5. Thảo luận và hạn chế
Nội dung sẽ phân tích những kết quả đạt được, các ưu điểm của phương pháp được áp dụng, những hạn chế còn tồn tại trong quá trình nghiên cứu và các vấn đề cần tiếp tục cải thiện trong các giai đoạn tiếp theo.
CHƯƠNG 5. ĐÁNH GIÁ BẢO MẬT
Chương này tập trung vào việc đánh giá mức độ rủi ro của hệ thống IoT quy mô nhỏ dựa trên các tài sản cần bảo vệ, các mối đe dọa và lỗ hổng bảo mật đã được nhận diện. Đồng thời, chương cũng trình bày các biện pháp giảm thiểu và đánh giá rủi ro còn lại sau khi áp dụng các giải pháp bảo mật.
5.1. Tài sản và dữ liệu
Nội dung sẽ trình bày danh sách các tài sản quan trọng của hệ thống IoT, phân loại giá trị của từng tài sản và xác định mức độ ưu tiên cần bảo vệ.
5.2. Mối đe dọa và lỗ hổng
Mục này sẽ nhận diện các mối đe dọa, lỗ hổng bảo mật và đánh giá khả năng ảnh hưởng đến từng thành phần của hệ thống.
5.3. Ma trận rủi ro
Nội dung sẽ xây dựng ma trận đánh giá rủi ro 5×5, xác định mức độ ưu tiên xử lý dựa trên khả năng xảy ra và mức độ tác động của từng rủi ro.
5.4. Biện pháp giảm thiểu
Mục này sẽ đề xuất các biện pháp kỹ thuật và quản lý nhằm giảm thiểu các rủi ro có mức độ cao, đồng thời nâng cao khả năng bảo vệ của hệ thống IoT.
5.5. Rủi ro còn lại
Sau khi áp dụng các biện pháp kiểm soát, nội dung sẽ đánh giá mức độ rủi ro còn lại và xác định khả năng chấp nhận của hệ thống đối với các rủi ro này.
CHƯƠNG 6. KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN
Chương cuối của báo cáo sẽ tổng kết các kết quả đạt được trong quá trình nghiên cứu, đánh giá những hạn chế của đề tài và đề xuất các hướng phát triển trong tương lai nhằm hoàn thiện mô hình quản lý rủi ro cho hệ thống IoT quy mô nhỏ.
6.1. Kết luận
Nội dung sẽ tổng hợp các kết quả chính của đề tài, đối chiếu với các mục tiêu nghiên cứu đã đề ra và đánh giá mức độ hoàn thành của đề tài.
6.2. Hạn chế
Mục này sẽ trình bày các hạn chế về phạm vi nghiên cứu, môi trường triển khai, dữ liệu sử dụng và những khó khăn gặp phải trong quá trình thực hiện.
6.3. Hướng phát triển
Nội dung sẽ đề xuất các hướng mở rộng như áp dụng mô hình cho hệ thống IoT thực tế, tích hợp các công cụ giám sát bảo mật, bổ sung phương pháp đánh giá định lượng và mở rộng khả năng tự động hóa quá trình quản lý rủi ro.
PHỤ LỤC TIẾN ĐỘ TUẦN 02
A. Góp ý từ báo cáo lần 1
STT	Góp ý của giảng viên	Cách đã xử lý	Vị trí trong bản thảo	Trạng thái
1	Bổ sung bối cảnh và mục tiêu nghiên cứu	Hoàn thiện Chương 1	Chương 1	Đã hoàn thành
2	Viết lại cơ sở lý thuyết theo văn phong báo cáo	Hoàn thiện Chương 2	Chương 2	Đã hoàn thành
3	Bổ sung sơ đồ kiến trúc hệ thống	Thiết kế sơ đồ IoT	Chương 2	Đã hoàn thành
4	Bổ sung quy trình quản lý rủi ro	Thiết kế sơ đồ quy trình	Chương 2	Đã hoàn thành
5	Chuẩn bị dàn ý Chương 3–6	Hoàn thiện cấu trúc báo cáo	Chương 3–6	Đã hoàn thành

B. Minh chứng Tuần 02
ID	Loại	Tên file/link/commit	Nội dung chứng minh	Ngày
MC-01	Báo cáo	BaoCao_Tuan02.docx	Hoàn thiện Chương 1	20/07/2026
MC-02	Hình ảnh	KienTruc_IoT.png	Sơ đồ kiến trúc hệ thống IoT	20/07/2026
MC-03	Hình ảnh	QuyTrinh_Risk.png	Quy trình quản lý rủi ro	20/07/2026
MC-04	Tài liệu	RiskRegister.xlsx	Khung đánh giá rủi ro	20/07/2026
MC-05	GitHub	README.md	README và tài liệu tham khảo	20/07/2026

C. Cam kết trước Buổi 03
Nội dung	Chi tiết
Phần sẽ hoàn thành	Hoàn thiện Chương 3 và xây dựng mô hình quản lý rủi ro cho hệ thống IoT quy mô nhỏ.
Sản phẩm dự kiến	Sơ đồ kiến trúc chi tiết, quy trình đánh giá rủi ro, Risk Register mẫu, ma trận rủi ro 5×5 và checklist bảo mật.
Mốc hoàn thành	Trước Buổi 03 theo kế hoạch của học phần.
Hỗ trợ cần từ giảng viên	Góp ý về mô hình đánh giá rủi ro, tính phù hợp của Risk Register và các tiêu chí đánh giá bảo mật.

