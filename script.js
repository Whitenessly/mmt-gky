/**
 * Hệ Thống Trắc Nghiệm Mạng Máy Tính - PTIT
 * Tổng hợp toàn bộ 55 câu hỏi từ Bộ Đề Giữa Kỳ MMT
 */

const rawQuestions = [
  {
    "id": 1,
    "exam": 1,
    "category": "Tầng Giao Vận (Transport Layer)",
    "question": "Checksum trong gói dữ liệu UDP có độ dài bao nhiêu?",
    "options": [
      "8 bit",
      "4 bit",
      "16 bit",
      "32 bit"
    ],
    "correct": 2,
    "explanation": "Trong tiêu đề (header) của UDP (RFC 768), trường Checksum có độ dài cố định là 16 bit (2 byte), được sử dụng để phát hiện lỗi bit trong quá trình truyền gói tin UDP."
  },
  {
    "id": 2,
    "exam": 1,
    "category": "Tổng quan & Mô hình Mạng",
    "question": "Đơn vị dữ liệu ở tầng Liên kết dữ liệu (Data Link Layer) là gì?",
    "options": [
      "Segment",
      "Frame",
      "Datagram",
      "Message"
    ],
    "correct": 1,
    "explanation": "Đơn vị dữ liệu giao thức (PDU) theo từng tầng: Tầng Ứng dụng là Message; Tầng Giao vận là Segment; Tầng Mạng là Datagram / Packet; Tầng Liên kết dữ liệu là Frame; Tầng Vật lý là Bit."
  },
  {
    "id": 3,
    "exam": 1,
    "category": "Tầng Giao Vận (Transport Layer)",
    "question": "Trong gói dữ liệu UDP (UDP segment), vùng dữ liệu thực sự bắt đầu từ byte thứ mấy?",
    "options": [
      "4",
      "9",
      "8",
      "5"
    ],
    "correct": 1,
    "explanation": "Header của UDP gồm 4 trường (Source Port 2B, Destination Port 2B, Length 2B, Checksum 2B) với tổng kích thước cố định là 8 byte (đánh số byte 1 đến 8). Do đó vùng dữ liệu (payload) thực sự bắt đầu từ byte thứ 9."
  },
  {
    "id": 4,
    "exam": 1,
    "category": "Tầng Giao Vận (Transport Layer)",
    "question": "Trường số thứ tự (Sequence number) trong phần tiêu đề của TCP segment là gì?",
    "options": [
      "Số ACK tích lũy",
      "Số thứ tự của byte đầu tiên trong segment",
      "Số thứ tự lần lượt của segment từ 1 đến N",
      "Số thứ tự của byte tiếp theo được mong đợi từ phía bên kia"
    ],
    "correct": 1,
    "explanation": "TCP coi luồng dữ liệu là một dòng byte (byte stream) có thứ tự. Sequence Number của TCP segment mang giá trị là số thứ tự của byte dữ liệu đầu tiên nằm trong segment đó."
  },
  {
    "id": 5,
    "exam": 1,
    "category": "Tầng Giao Vận (Transport Layer)",
    "question": "Độ phức tạp của giao thức truyền tin cậy (rdt - Reliable Data Transfer protocol) phụ thuộc vào yếu tố nào?",
    "options": [
      "Các đặc tính của kênh truyền",
      "Các thiết bị mạng (router, switch, hub, ...)",
      "Kiến trúc mạng",
      "Khoảng cách giữa các host"
    ],
    "correct": 0,
    "explanation": "Theo lý thuyết rdt (rdt 1.0, 2.0, 2.1, 2.2, 3.0), độ phức tạp của giao thức truyền tin cậy phụ thuộc hoàn toàn vào các đặc tính của kênh truyền bên dưới (kênh hoàn hảo rdt 1.0; kênh có lỗi bit rdt 2.x; kênh có lỗi bit và mất gói rdt 3.0)."
  },
  {
    "id": 6,
    "exam": 1,
    "category": "Tầng Ứng Dụng (Application Layer)",
    "question": "Quan sát một người đang truy nhập một trang web, thấy người này gõ đường dẫn như sau: http://gaia.cs.umass.edu:8080/kurose_ross/... Máy chủ web sử dụng là:",
    "options": [
      "Số hiệu cổng mặc định",
      "Số hiệu cổng tùy ý",
      "Số hiệu cổng dành riêng cho máy chủ web",
      "Số hiệu cổng theo chuẩn chung"
    ],
    "correct": 1,
    "explanation": "Cổng mặc định theo chuẩn của HTTP là 80. Khi URL ghi rõ số cổng như :8080, máy chủ web đang sử dụng số hiệu cổng tùy ý (không theo mặc định chuẩn chung)."
  },
  {
    "id": 7,
    "exam": 1,
    "category": "Tầng Giao Vận & Ứng Dụng",
    "question": "Các ứng dụng nào sau đây đều sử dụng giao thức truyền vận TCP?",
    "options": [
      "Hội thảo từ xa, điện thoại Internet, streaming media",
      "Telnet, DNS, Email",
      "Web, truyền file, Email",
      "Web, DNS, điện thoại Internet"
    ],
    "correct": 2,
    "explanation": "Web (HTTP/HTTPS), Truyền file (FTP), và Email (SMTP, POP3, IMAP) đều đòi hỏi tính toàn vẹn và độ tin cậy tuyệt đối về dữ liệu nên đều sử dụng TCP."
  },
  {
    "id": 8,
    "exam": 1,
    "category": "Tầng Mạng (Network Layer)",
    "question": "Tầng mạng (Network layer) thực hiện các chức năng chính nào?",
    "options": [
      "Vận chuyển dữ liệu giữa các máy chủ (end to end)",
      "Tạo khung dữ liệu (frame)",
      "Chọn đường và chuyển tiếp gói tin",
      "Chạy chương trình ứng dụng người dùng"
    ],
    "correct": 2,
    "explanation": "Hai chức năng cốt lõi quan trọng nhất của tầng Mạng là: Định tuyến / Chọn đường (Routing - xác định lộ trình gói tin từ nguồn đến đích) và Chuyển tiếp (Forwarding - chuyển gói tin từ cổng vào tới cổng ra thích hợp)."
  },
  {
    "id": 9,
    "exam": 1,
    "category": "Tổng quan & Mô hình Mạng",
    "question": "Thứ tự đúng của các đơn vị dữ liệu trong mô hình TCP/IP từ tầng ứng dụng xuống tầng vật lý là:",
    "options": [
      "Data, Segment, Packet, Frame, Bit",
      "Data, Segment, Frame, Packet, Bit",
      "Data, Packet, Frame, Segment, Bit",
      "Data, Frame, Segment, Packet, Bit"
    ],
    "correct": 0,
    "explanation": "Thứ tự PDU từ trên xuống: Tầng Ứng dụng (Data/Message) -> Tầng Giao vận (Segment) -> Tầng Mạng (Packet/Datagram) -> Tầng Liên kết dữ liệu (Frame) -> Tầng Vật lý (Bit)."
  },
  {
    "id": 10,
    "exam": 1,
    "category": "Kiến trúc Mạng & Tô-pô",
    "question": "Mô tả nào sau đây dành cho mạng tô-pô hình sao (Star topology)?",
    "options": [
      "Có một nút trung tâm và các nút mạng khác kết nối đến",
      "Mỗi nút mạng đều kết nối trực tiếp với tất cả các nút khác",
      "Truyền dữ liệu qua cáp đồng trục",
      "Các nút mạng sử dụng chung một đường cáp"
    ],
    "correct": 0,
    "explanation": "Mạng hình sao bao gồm một nút trung tâm (Hub hoặc Switch) và tất cả các trạm làm việc khác kết nối trực tiếp qua liên kết riêng tới nút trung tâm này."
  },
  {
    "id": 11,
    "exam": 1,
    "category": "Tổng quan & Mô hình Mạng",
    "question": "Quá trình dữ liệu di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào tại các tầng gửi?",
    "options": [
      "Đóng gói dữ liệu",
      "Lọc dữ liệu",
      "Phân tích dữ liệu",
      "Kiểm thử dữ liệu"
    ],
    "correct": 0,
    "explanation": "Tại máy gửi, dữ liệu đi từ tầng Ứng dụng xuống các tầng thấp hơn qua quá trình Đóng gói dữ liệu (Encapsulation), mỗi tầng sẽ bổ sung thêm tiêu đề (header) của tầng đó."
  },
  {
    "id": 12,
    "exam": 1,
    "category": "Tầng Giao Vận (Transport Layer)",
    "question": "Một UDP socket được xác định (định danh) bởi cặp thông tin nào?",
    "options": [
      "Địa chỉ IP nguồn, địa chỉ IP đích",
      "Địa chỉ IP đích, số port đích",
      "Địa chỉ IP nguồn, số port nguồn",
      "Địa chỉ IP nguồn, địa chỉ IP đích, số port nguồn, số port đích"
    ],
    "correct": 1,
    "explanation": "UDP là giao thức phi kết nối. Hệ điều hành chuyển gói tin UDP đến ứng dụng dựa trên bộ 2 thành phần: (Địa chỉ IP đích, số hiệu cổng đích). Trong khi TCP socket cần bộ 4 thành phần (IP nguồn, port nguồn, IP đích, port đích)."
  },
  {
    "id": 13,
    "exam": 1,
    "category": "Kiến trúc Ứng Dụng",
    "question": "Trong kiến trúc ứng dụng dạng P2P (peer-to-peer):",
    "options": [
      "Các peer không kết nối liên tục và có thể thay đổi địa chỉ IP; mỗi peer yêu cầu dịch vụ từ các peer khác và ngược lại cung cấp dịch vụ cho các peer khác",
      "Các peer không kết nối liên tục và có thể thay đổi địa chỉ IP; mỗi peer sẽ chỉ yêu cầu dịch vụ từ một số peer khác",
      "Các peer kết nối liên tục và có địa chỉ IP cố định; mỗi peer sẽ chỉ yêu cầu dịch vụ từ một số peer khác",
      "Các peer kết nối liên tục và có địa chỉ IP cố định; mỗi peer yêu cầu dịch vụ từ một peer nào đó"
    ],
    "correct": 0,
    "explanation": "Đặc trưng của kiến trúc P2P là không có server luôn bật cố định, các peer kết nối ngắt quãng, có thể thay đổi địa chỉ IP, và mỗi peer vừa là client nhận dịch vụ, vừa là server cung cấp dịch vụ (self-scalability)."
  },
  {
    "id": 14,
    "exam": 1,
    "category": "Tổng quan & Mô hình Mạng",
    "question": "Thứ tự các tầng từ cao đến thấp trong mô hình TCP/IP là:",
    "options": [
      "Transport, Internet, Application, Network Access",
      "Application, Internet, Transport, Network Access",
      "Application, Network Access, Transport, Internet",
      "Application, Transport, Internet, Network Access"
    ],
    "correct": 3,
    "explanation": "Thứ tự từ trên xuống dưới trong mô hình TCP/IP: Tầng Ứng dụng (Application) -> Tầng Giao vận (Transport) -> Tầng Internet -> Tầng Truy cập mạng (Network Access)."
  },
  {
    "id": 15,
    "exam": 1,
    "category": "Tổng quan & Hiệu năng Mạng",
    "question": "Trễ truyền (Transmission delay) phụ thuộc vào yếu tố nào?",
    "options": [
      "Chiều dài của liên kết vật lý",
      "Chiều dài của gói tin và băng thông của liên kết",
      "Việc kiểm tra lỗi và xác định liên kết ra cho gói tin",
      "Mức độ tắc nghẽn của bộ định tuyến"
    ],
    "correct": 1,
    "explanation": "Trễ truyền được tính bằng d_trans = L / R, trong đó L là kích thước gói tin (bit) và R là băng thông đường truyền (bps). (Khác với trễ lan truyền d_prop = d / s phụ thuộc chiều dài d của liên kết)."
  },
  {
    "id": 16,
    "exam": 1,
    "category": "Tổng quan & Hiệu năng Mạng",
    "question": "RTT (Round Trip Time) là:",
    "options": [
      "Thời gian truyền file",
      "Thời gian để gửi một gói nhỏ đi từ client đến server và quay trở về",
      "Thời gian để gửi một gói nhỏ đi từ client đến server",
      "Thời gian khởi tạo kết nối TCP"
    ],
    "correct": 1,
    "explanation": "RTT (Round Trip Time - Thời gian khứ hồi) là thời gian để một gói tin nhỏ đi từ máy gửi đến máy nhận và quay trở về máy gửi."
  },
  {
    "id": 17,
    "exam": 1,
    "category": "Tầng Ứng Dụng & Cổng Dịch Vụ",
    "question": "Trong số các cặp giao thức và cổng dịch vụ sau, cặp nào là SAI?",
    "options": [
      "SMTP: TCP Port 25",
      "DNS: UDP Port 53",
      "HTTP: TCP Port 80",
      "FTP: UDP Port 22"
    ],
    "correct": 3,
    "explanation": "Giao thức FTP sử dụng giao thức truyền vận TCP trên 2 cổng: cổng 20 (dữ liệu) và cổng 21 (điều khiển). Cổng 22 là dành cho giao thức SSH qua TCP. Do đó cặp 'FTP: UDP Port 22' là sai."
  },
  {
    "id": 18,
    "exam": 1,
    "category": "Tầng Ứng Dụng (Application Layer)",
    "question": "Đâu là một URL (Uniform Resource Locator) hoàn chỉnh?",
    "options": [
      "www.someschool.edu",
      "/someDept/pic.gif",
      "www.someschool.edu/someDept/pic.gif",
      "192.168.1.1"
    ],
    "correct": 2,
    "explanation": "Một URL hoàn chỉnh bao gồm tên máy chủ lưu trữ (hostname: www.someschool.edu) và đường dẫn đến tài nguyên (pathname: /someDept/pic.gif)."
  },
  {
    "id": 19,
    "exam": 1,
    "category": "Tầng Giao Vận (Transport Layer)",
    "question": "Điều khiển luồng (Flow Control) có nghĩa là gì?",
    "options": [
      "Bên gửi điều khiển bên nhận để bên nhận có thể nhận liên tục dữ liệu",
      "Bên nhận điều khiển bên gửi để bên gửi sẽ không làm tràn bộ đệm của bên nhận do việc gửi dữ liệu quá nhanh",
      "Bên gửi gửi dữ liệu theo nhu cầu của người dùng",
      "Bên nhận điều khiển bên gửi để bên gửi có thể gửi liên tục dữ liệu nhanh nhất cho bên nhận"
    ],
    "correct": 1,
    "explanation": "Điều khiển luồng là cơ chế bên nhận kiểm soát tốc độ gửi dữ liệu của bên gửi, nhằm đảm bảo bên gửi không truyền dữ liệu quá nhanh làm tràn bộ đệm của bên nhận (buffer overflow)."
  },
  {
    "id": 20,
    "exam": 1,
    "category": "Tổng quan & Kiến trúc Internet",
    "question": "Cấu trúc chung của mạng Internet là:",
    "options": [
      "Mạng của các mạng, tất cả các ISP được kết nối ngang hàng với nhau",
      "Mạng của các mạng, bao gồm rất nhiều các ISP lần lượt được kết nối với nhau theo cấu trúc phân tầng",
      "Phân cấp tất cả các phần tử của mạng theo cấp độ của cơ quan, tổ chức, công ty đăng ký",
      "Tất cả các phần tử của mạng được kết nối ngang hàng với nhau"
    ],
    "correct": 1,
    "explanation": "Mạng Internet là mạng của các mạng kết nối theo cấu trúc thứ bậc phân tầng (hierarchical structure), gồm Tier-1 ISPs toàn cầu, Regional ISPs khu vực và Access ISPs cục bộ."
  },
  {
    "id": 21,
    "exam": 1,
    "category": "Tầng Ứng Dụng (Application Layer)",
    "question": "Mã 404 trong thông điệp trả lời từ Web server cho Web client có ý nghĩa gì?",
    "options": [
      "Yêu cầu của Client không hợp lệ",
      "Đối tượng client yêu cầu không có",
      "Server không hiểu yêu cầu của client",
      "Không có câu trả lời nào đúng"
    ],
    "correct": 1,
    "explanation": "Mã trạng thái 404 Not Found báo hiệu rằng tài nguyên (tệp tin, trang web) mà client gửi yêu cầu không tồn tại trên máy chủ web."
  },
  {
    "id": 22,
    "exam": 1,
    "category": "Kiến trúc Ứng Dụng",
    "question": "Trong kiến trúc ứng dụng dạng client/server:",
    "options": [
      "Server luôn hoạt động và có địa chỉ IP cố định; client chỉ truyền thông với server và có địa chỉ IP có thể thay đổi",
      "Server có địa chỉ IP cố định nhưng không phải thường xuyên hoạt động; client có địa chỉ IP cố định và chỉ truyền thông với server hoặc các client khác",
      "Server luôn hoạt động và có địa chỉ IP cố định; client có địa chỉ IP không cố định và có thể trao đổi với client khác",
      "Server có địa chỉ IP cố định nhưng không phải thường xuyên hoạt động; client chỉ truyền thông với server và địa chỉ IP cố định"
    ],
    "correct": 0,
    "explanation": "Trong mô hình Client/Server: Server luôn thường trực trực tuyến (always-on) với địa chỉ IP tĩnh để các máy trạm có thể kết nối đến; Client chỉ liên lạc với server và địa chỉ IP của client có thể là IP động thay đổi."
  },
  {
    "id": 23,
    "exam": 1,
    "category": "Tầng Ứng Dụng (Application Layer)",
    "question": "Các Web client thường được gọi là gì?",
    "options": [
      "Browser",
      "HTML interpreter (trình thông dịch HTML)",
      "Mosaic",
      "Netscape Navigator"
    ],
    "correct": 0,
    "explanation": "Các ứng dụng client dùng để truy cập dịch vụ Web được người dùng và kỹ thuật gọi chung là Trình duyệt Web (Web Browser)."
  },
  {
    "id": 24,
    "exam": 1,
    "category": "Kiến trúc Ứng Dụng",
    "question": "Ứng dụng nào sau đây được xây dựng theo mô hình client/server thuần túy?",
    "options": [
      "KaZaA, Email",
      "Email, Web",
      "Bit Torrent, Web",
      "Skype, Email"
    ],
    "correct": 1,
    "explanation": "Web (HTTP) và Email (SMTP, POP3, IMAP) hoạt động theo kiến trúc Client/Server truyền thống. BitTorrent, KaZaA, Skype là các hệ thống dùng kiến trúc P2P."
  },
  {
    "id": 25,
    "exam": 1,
    "category": "Tổng quan & Mô hình Mạng",
    "question": "Trong mô hình mạng Internet, chuẩn UNICODE (cho việc mã hoá các ký tự) sẽ nằm ở tầng nào?",
    "options": [
      "Liên kết dữ liệu",
      "Ứng dụng",
      "Giao vận",
      "Mạng"
    ],
    "correct": 1,
    "explanation": "Trong mô hình TCP/IP, các chức năng định dạng, nén và mã hóa ký tự (như UNICODE, ASCII) vốn thuộc tầng Trình diễn (Presentation) trong OSI được tích hợp trực tiếp vào Tầng Ứng dụng (Application)."
  },
  {
    "id": 26,
    "exam": 1,
    "category": "Tầng Ứng Dụng (Application Layer)",
    "question": "FTP là từ viết tắt của cụm từ nào?",
    "options": [
      "Protocol Transfer Program",
      "Folder Transfer Protocol",
      "Protocol Transfer Folder",
      "File Transfer Protocol"
    ],
    "correct": 3,
    "explanation": "FTP là viết tắt của File Transfer Protocol (Giao thức truyền tệp tin)."
  },
  {
    "id": 27,
    "exam": 1,
    "category": "Tổng quan & Hiệu năng Mạng",
    "question": "Giả sử cần truyền một gói tin có độ dài L = 18Mb trên 2 liên kết liền nhau, thông qua một bộ chuyển mạch lưu-và-chuyển tiếp (store-and-forward) có tốc độ R = 1.5 Mbps. Thời gian để truyền gói từ đầu cuối này đến đầu cuối kia là:",
    "options": [
      "24s",
      "12s",
      "1,5s",
      "27s"
    ],
    "correct": 0,
    "explanation": "Thời gian truyền trên 1 chặng là: d = L / R = 18 Mb / 1.5 Mbps = 12 giây. Với bộ chuyển mạch store-and-forward trên 2 liên kết, router phải nhận xong toàn bộ gói mới đẩy sang liên kết 2, tổng thời gian truyền là: 2 * (L / R) = 2 * 12s = 24 giây."
  },
  {
    "id": 28,
    "exam": 1,
    "category": "Kiến trúc Mạng & Tô-pô",
    "question": "Mạng LAN hình sao (STAR) khi có sự cố trên đường cáp nối một máy trạm thì:",
    "options": [
      "Không ảnh hưởng tới hoạt động toàn bộ hệ thống",
      "Sẽ ngừng hoạt động toàn bộ hệ thống",
      "Chỉ ảnh hưởng đến một phần của hệ thống",
      "Chỉ ảnh hưởng đến trạm có sự cố"
    ],
    "correct": 3,
    "explanation": "Trong mạng hình sao, mỗi nút mạng kết nối độc lập với thiết bị trung tâm. Do đó khi cáp nối của một trạm có sự cố thì chỉ duy nhất trạm đó bị mất kết nối, các trạm còn lại vẫn hoạt động bình thường."
  },
  {
    "id": 29,
    "exam": 1,
    "category": "Tầng Giao Vận & Ứng Dụng",
    "question": "Định danh (identifier) của một tiến trình trên mạng bao gồm các thành phần nào?",
    "options": [
      "Địa chỉ IP của host",
      "Địa chỉ IP nguồn, số hiệu cổng nguồn, địa chỉ IP đích, số hiệu cổng đích",
      "Địa chỉ IP nguồn và địa chỉ IP đích",
      "Địa chỉ IP và số hiệu cổng liên kết với tiến trình trên host"
    ],
    "correct": 3,
    "explanation": "Để xác định một tiến trình chạy trên mạng, cần có Địa chỉ IP (để xác định máy chủ/host) và Số hiệu cổng Port (để phân biệt giữa các tiến trình đang chạy trên cùng host đó)."
  },
  {
    "id": 30,
    "exam": 1,
    "category": "Tầng Ứng Dụng (Application Layer)",
    "question": "Mục đích của kỹ thuật Web caching (Proxy server) là gì?",
    "options": [
      "Thỏa mãn yêu cầu HTTP của client mà không cần liên quan đến server nguồn",
      "Giúp client lấy thông tin mà không cần gửi yêu cầu HTTP",
      "Chứa mọi thông tin mà các client bên trong hệ thống mạng cần",
      "Thỏa mãn yêu cầu HTTP của client bằng cách đi đến server nguồn để lấy thông tin"
    ],
    "correct": 0,
    "explanation": "Web cache lưu trữ bản sao dữ liệu của các yêu cầu HTTP. Khi có yêu cầu mới trùng khớp, nó trả về dữ liệu ngay từ bộ đệm mà không cần gửi truy vấn tới server nguồn, giúp giảm thời gian phản hồi và tiết kiệm băng thông mạng."
  },
  {
    "id": 31,
    "exam": 2,
    "category": "Công Cụ Mạng & Lệnh DNS",
    "question": "Khi thực hiện nslookup ptit.edu.vn và nslookup ptit.edu.vn 8.8.8.8 thì cho ra hai kết quả khác nhau, điều này có thể là do:",
    "options": [
      "Lỗi trong file hosts",
      "Máy không được cấp IP",
      "Hai DNS server có dữ liệu cache khác nhau",
      "Máy tính bị lỗi mạng"
    ],
    "correct": 2,
    "explanation": "Máy chủ DNS mặc định nội bộ và máy chủ DNS của Google (8.8.8.8) có dữ liệu bộ nhớ đệm (cache) và thời gian sống của bản ghi (TTL) khác nhau nên có thể trả về IP khác nhau."
  },
  {
    "id": 32,
    "exam": 2,
    "category": "Lệnh Mạng Cơ Bản",
    "question": "Lệnh ping được dùng để làm gì?",
    "options": [
      "Kiểm tra kết nối giữa hai thiết bị mạng",
      "Xác định địa chỉ MAC của thiết bị đích",
      "Kiểm tra tốc độ tải file qua mạng",
      "Xem thông tin cổng mạng đang mở hay không"
    ],
    "correct": 0,
    "explanation": "Lệnh ping gửi các gói tin ICMP Echo Request và nhận ICMP Echo Reply để kiểm tra xem hai thiết bị mạng có kết nối thông suốt với nhau hay không."
  },
  {
    "id": 33,
    "exam": 2,
    "category": "Công Cụ Mạng & Lệnh DNS",
    "question": "Khi thực hiện 2 lệnh nslookup www.facebook.com 8.8.8.8 và nslookup www.facebook.com 1.1.1.1 cho kết quả trả về khác nhau, nguyên nhân hợp lý nhất là gì?",
    "options": [
      "Cả hai lệnh đều bị lỗi vì không thể phân giải tên miền",
      "Máy tính bị lỗi kết nối mạng LAN",
      "Hai máy chủ DNS khác nhau có cơ chế lưu trữ và phân giải tên miền khác nhau",
      "Máy đích của facebook thay đổi địa chỉ IP mỗi phút"
    ],
    "correct": 2,
    "explanation": "Các hệ thống DNS lớn (8.8.8.8 của Google và 1.1.1.1 của Cloudflare) có các máy chủ đặt tại nhiều khu vực khác nhau và cơ chế phân giải định tuyến CDN khác nhau, dẫn tới việc chỉ định IP máy chủ gần nhất khác nhau."
  },
  {
    "id": 34,
    "exam": 2,
    "category": "Phân Tích Gói Tin Wireshark",
    "question": "Để xem nội dung phần HTML body của một trang web trong Wireshark, cần chọn gói tin thuộc giao thức nào?",
    "options": [
      "DNS",
      "TCP",
      "UDP",
      "HTTP"
    ],
    "correct": 3,
    "explanation": "Nội dung mã nguồn HTML của trang web nằm trong phần tải trọng (payload) của gói tin phản hồi thuộc giao thức tầng ứng dụng là HTTP (Line-based text data)."
  },
  {
    "id": 35,
    "exam": 2,
    "category": "Tầng Giao Vận (TCP)",
    "question": "Trong gói tin TCP, cờ \"SYN\" có ý nghĩa là:",
    "options": [
      "Báo lỗi truyền",
      "Yêu cầu bắt đầu kết nối",
      "Kết thúc kết nối",
      "Xác nhận dữ liệu"
    ],
    "correct": 1,
    "explanation": "Cờ SYN (Synchronize Sequence Numbers) được bật trong gói tin đầu tiên khi bắt đầu quá trình bắt tay 3 bước của TCP để yêu cầu thiết lập kết nối."
  },
  {
    "id": 36,
    "exam": 2,
    "category": "Lệnh Netstat",
    "question": "Khi phân tích kết quả netstat, người dùng thấy nhiều cổng TCP mở với trạng thái LISTENING. Điều này cho biết:",
    "options": [
      "Hệ thống đang không hoạt động",
      "Máy tính đang tấn công mạng",
      "Các kết nối đã hết hạn",
      "Máy tính đang chạy nhiều dịch vụ mạng đang chờ kết nối"
    ],
    "correct": 3,
    "explanation": "Trạng thái LISTENING chứng tỏ trên máy trạm đang chạy các tiến trình dịch vụ mạng (như web server, SQL server, SSH server...) và các tiến trình này đang lắng nghe chờ yêu cầu kết nối từ bên ngoài."
  },
  {
    "id": 37,
    "exam": 2,
    "category": "Lệnh Netstat",
    "question": "Khi thực hiện lệnh netstat, người dùng thấy nhiều kết nối đến cùng một IP và cổng đích 443. Điều này cho thấy:",
    "options": [
      "Máy tính bị tấn công DDoS",
      "Server đang ngắt kết nối",
      "Máy tính đang tải nhiều file từ cùng một server HTTPS",
      "Máy tính bị lỗi mạng"
    ],
    "correct": 2,
    "explanation": "Cổng 443 là cổng của giao thức HTTPS. Trình duyệt thường mở đồng thời nhiều kết nối TCP đến máy chủ web HTTPS để tải song song các tài nguyên của trang web (ảnh, style, script...)."
  },
  {
    "id": 38,
    "exam": 2,
    "category": "Công Cụ Mạng & Lệnh DNS",
    "question": "Tham số -type=mx trong lệnh nslookup -type=mx gmail.com dùng để:",
    "options": [
      "Truy vấn bản ghi SOA",
      "Truy vấn bản ghi máy chủ web",
      "Truy vấn bản ghi máy chủ thư điện tử",
      "Truy vấn bản ghi địa chỉ IP"
    ],
    "correct": 2,
    "explanation": "Bản ghi MX (Mail Exchanger) là bản ghi trên máy chủ DNS xác định danh sách các máy chủ tiếp nhận thư điện tử của tên miền."
  },
  {
    "id": 39,
    "exam": 2,
    "category": "Lệnh Tracert",
    "question": "Khi thực hiện tracert google.com, nếu bước nhảy đầu tiên (hop 1) là 192.168.1.1, thì:",
    "options": [
      "Đây là địa chỉ IP của router/gateway trong mạng LAN cục bộ",
      "Đây là máy đích cần truy vấn",
      "Đây là máy chủ trung gian ngoài internet",
      "Đây là máy chủ DNS của Google"
    ],
    "correct": 0,
    "explanation": "Hop 1 luôn là thiết bị định tuyến cục bộ (Default Gateway) của mạng LAN mà máy tính kết nối tới, thường sử dụng địa chỉ IP nội bộ như 192.168.1.1."
  },
  {
    "id": 40,
    "exam": 2,
    "category": "Lệnh Netstat",
    "question": "Lệnh netstat được dùng để làm gì?",
    "options": [
      "Gửi gói tin ICMP để kiểm tra đường truyền",
      "Hiển thị thông tin kết nối mạng, cổng và giao thức",
      "Cấu hình địa chỉ IP cho card mạng",
      "Kiểm tra kết nối Internet"
    ],
    "correct": 1,
    "explanation": "Netstat (Network Statistics) là công cụ dòng lệnh hiển thị các kết nối mạng TCP/UDP đang hoạt động, các cổng đang mở, bảng định tuyến và các thông số mạng."
  },
  {
    "id": 41,
    "exam": 2,
    "category": "Phân Tích Gói Tin Wireshark",
    "question": "Khi mở Wireshark, để bắt gói tin cần thực hiện:",
    "options": [
      "Mở file log hệ thống",
      "Nhập lệnh netstat",
      "Chọn giao diện mạng cần giám sát",
      "Tạo mới một capture filter"
    ],
    "correct": 2,
    "explanation": "Khi khởi động Wireshark, bước đầu tiên để bắt đầu ghi lại lưu lượng là chọn giao diện mạng (Network Interface) đang hoạt động (ví dụ Wi-Fi hoặc Ethernet)."
  },
  {
    "id": 42,
    "exam": 2,
    "category": "Lệnh Tracert",
    "question": "Mục đích chính của lệnh tracert trong Windows là gì?",
    "options": [
      "Kiểm tra băng thông kết nối mạng",
      "Đo tốc độ tải xuống từ internet",
      "Xác định đường đi của gói tin đến một máy đích trong hệ thống mạng",
      "Xóa bộ nhớ DNS cache"
    ],
    "correct": 2,
    "explanation": "Lệnh tracert (Trace Route) được dùng để truy vết hành trình của gói tin, liệt kê danh sách tất cả các router trung gian (hop) từ máy nguồn đến máy đích kèm thời gian phản hồi."
  },
  {
    "id": 43,
    "exam": 2,
    "category": "Công Cụ Mạng & Lệnh DNS",
    "question": "Lệnh nào dưới đây dùng để tra cứu địa chỉ IP của tên miền ptit.edu.vn?",
    "options": [
      "ping ptit.edu.vn",
      "nslookup ptit.edu.vn",
      "tracert ptit.edu.vn",
      "ipconfig /all"
    ],
    "correct": 1,
    "explanation": "Lệnh nslookup (Name Server Lookup) là công cụ chuyên biệt để tra cứu thông tin tên miền và tìm kiếm địa chỉ IP từ máy chủ DNS."
  },
  {
    "id": 44,
    "exam": 2,
    "category": "Lệnh Netstat",
    "question": "Lệnh netstat -a được dùng để làm gì?",
    "options": [
      "Dùng để cấu hình cổng mặc định",
      "Hiển thị tất cả các kết nối TCP đang hoạt động",
      "Hiển thị tất cả các cổng đang mở, bao gồm TCP và UDP",
      "Chỉ hiển thị các kết nối đã đóng"
    ],
    "correct": 2,
    "explanation": "Tham số -a (all) trong netstat hiển thị tất cả các kết nối đang hoạt động cũng như các cổng đang mở (listening) cho cả hai giao thức TCP và UDP."
  },
  {
    "id": 45,
    "exam": 2,
    "category": "Phân Tích Gói Tin Wireshark",
    "question": "Người dùng lọc gói tin SMTP trong Wireshark và thấy dòng \"MAIL FROM\". Đây là:",
    "options": [
      "Địa chỉ IP người gửi",
      "Tên người gửi trong nội dung thư",
      "Tiêu đề thư",
      "Lệnh trong giao thức SMTP"
    ],
    "correct": 3,
    "explanation": "Trong giao thức SMTP, \"MAIL FROM:\" là câu lệnh của client dùng để bắt đầu gửi một bức thư và xác định địa chỉ email của người gửi cho máy chủ nhận."
  },
  {
    "id": 46,
    "exam": 2,
    "category": "Phân Tích Gói Tin Wireshark",
    "question": "Wireshark là công cụ dùng để làm gì?",
    "options": [
      "Bắt và phân tích gói tin mạng",
      "Tạo địa chỉ IP động",
      "Quản lý người dùng mạng",
      "Cấu hình router và switch"
    ],
    "correct": 0,
    "explanation": "Wireshark là một phần mềm phân tích mạng (packet analyzer / packet sniffer) dùng để bắt và kiểm tra chi tiết dữ liệu gói tin lưu thông trên mạng máy tính."
  },
  {
    "id": 47,
    "exam": 2,
    "category": "Lệnh Ipconfig",
    "question": "Khi người dùng nhập ipconfig /release, kết quả là gì?",
    "options": [
      "Làm mới cache DNS",
      "Huỷ bỏ địa chỉ IP đang dùng",
      "Hiển thị danh sách card mạng",
      "Yêu cầu DHCP cấp IP mới"
    ],
    "correct": 1,
    "explanation": "Lệnh \"ipconfig /release\" gửi thông điệp DHCPRELEASE giải phóng địa chỉ IP hiện thời mà card mạng đang được cấp từ máy chủ DHCP."
  },
  {
    "id": 48,
    "exam": 2,
    "category": "Phân Tích Gói Tin Wireshark & Cổng Dịch Vụ",
    "question": "Khi dùng Wireshark để bắt gói FTP và nhận thấy có cả gói TCP trên cổng 20 và 21, là do:",
    "options": [
      "Cả hai cổng đều truyền dữ liệu",
      "FTP không sử dụng các cổng này",
      "Cổng 20 dùng để truyền dữ liệu, cổng 21 dùng để điều khiển",
      "Cổng 21 dùng để truyền dữ liệu, cổng 20 dùng để điều khiển"
    ],
    "correct": 2,
    "explanation": "FTP sử dụng mô hình kết nối kép riêng biệt: cổng 21 dùng cho kênh điều khiển (Control connection - truyền lệnh) và cổng 20 dùng cho kênh dữ liệu (Data connection - truyền nội dung tệp tin)."
  },
  {
    "id": 49,
    "exam": 2,
    "category": "Chẩn Đoán Sự Cố Mạng",
    "question": "Một người dùng thực hiện ping www.google.com nhưng không thành công, trong khi ping 8.8.8.8 lại thành công. Nguyên nhân:",
    "options": [
      "DNS không phân giải được tên miền",
      "Firewall chặn ICMP",
      "Kết nối mạng vật lý bị lỗi",
      "Router bị hỏng"
    ],
    "correct": 0,
    "explanation": "Việc ping IP 8.8.8.8 thành công cho thấy hạ tầng mạng vật lý và giao thức ICMP hoàn toàn tốt. Lỗi chỉ xảy ra khi ping tên miền www.google.com chứng tỏ hệ thống DNS đang gặp sự cố không phân giải được tên miền sang địa chỉ IP."
  },
  {
    "id": 50,
    "exam": 2,
    "category": "Lệnh Tracert",
    "question": "Cú pháp đúng của lệnh tracert khi muốn truy vết đến website ptit.edu.vn là:",
    "options": [
      "tracert /show ptit.edu.vn",
      "tracert -n ptit.edu.vn",
      "tracert -ip ptit.edu.vn",
      "tracert ptit.edu.vn"
    ],
    "correct": 3,
    "explanation": "Cú pháp cơ bản của lệnh tracert trên Command Prompt của Windows là: tracert <hostname/IP>, ví dụ: tracert ptit.edu.vn."
  },
  {
    "id": 51,
    "exam": 2,
    "category": "Chẩn Đoán Sự Cố Mạng & Lệnh Ping",
    "question": "Khi thực hiện lệnh ping google.com, người dùng nhận được thông báo \"Packets: Sent = 4, Received = 3, Lost = 1 (25% loss)\". Kết luận là:",
    "options": [
      "Mạng hoạt động bình thường",
      "Có hiện tượng mất gói tin trong quá trình truyền",
      "Máy đích không tồn tại",
      "Mạng có độ trễ cao"
    ],
    "correct": 1,
    "explanation": "Thông báo Lost = 1 (25% loss) phản ánh trong số 4 gói gửi đi thì có 1 gói bị mất trên đường truyền do tắc nghẽn hoặc kết nối mạng không ổn định (packet loss)."
  },
  {
    "id": 52,
    "exam": 2,
    "category": "Lệnh Ipconfig",
    "question": "Để hiển thị thông tin chi tiết hơn về cấu hình giao diện mạng (gateway, DNS, MAC...), ta dùng lệnh:",
    "options": [
      "ipconfig /flushdns",
      "ipconfig /release",
      "ipconfig /all",
      "ipconfig /renew"
    ],
    "correct": 2,
    "explanation": "Lệnh \"ipconfig /all\" hiển thị toàn bộ thông tin chi tiết của tất cả các adapter mạng, bao gồm địa chỉ vật lý MAC, DHCP Server, DNS Server, Default Gateway..."
  },
  {
    "id": 53,
    "exam": 2,
    "category": "Lệnh Ipconfig",
    "question": "Tham số nào của lệnh ipconfig được dùng để xoá cache DNS trên máy tính?",
    "options": [
      "/displaydns",
      "/release",
      "/renew",
      "/flushdns"
    ],
    "correct": 3,
    "explanation": "Lệnh \"ipconfig /flushdns\" được dùng để xóa sạch bộ nhớ đệm (cache) phân giải tên miền của DNS Client Resolver trong Windows."
  },
  {
    "id": 54,
    "exam": 2,
    "category": "Phân Tích Gói Tin Wireshark & Bảo Mật Mạng",
    "question": "Khi phân tích gói tin HTTPS, người dùng không thể xem nội dung HTML là do:",
    "options": [
      "Gói tin bị thiếu phần header",
      "Wireshark bị lỗi",
      "Không có gói TCP tương ứng",
      "Dữ liệu đã được mã hóa bởi TLS/SSL"
    ],
    "correct": 3,
    "explanation": "Giao thức HTTPS mã hóa toàn bộ dữ liệu ở tầng ứng dụng bằng giao thức TLS/SSL, vì vậy trong Wireshark người dùng chỉ thấy các byte dữ liệu đã bị mã hóa mà không thấy được nội dung HTML gốc."
  },
  {
    "id": 55,
    "exam": 2,
    "category": "Lệnh Ping",
    "question": "Trong hệ điều hành Windows, cú pháp đúng để gửi 4 gói tin kiểm tra kết nối tới địa chỉ 8.8.8.8 là:",
    "options": [
      "ping 8.8.8.8 count 4",
      "ping -c 4 8.8.8.8",
      "ping 8.8.8.8 -n 4",
      "ping 8.8.8.8 /n 4"
    ],
    "correct": 2,
    "explanation": "Trong Windows, tùy chọn số lượng gói tin gửi đi là -n (Number of packets), cú pháp đúng là: ping 8.8.8.8 -n 4. (Trong khi tùy chọn -c được dùng trên hệ điều hành Linux/macOS)."
  }
];

const state = {
  allQuestions: rawQuestions,
  filteredQuestions: [...rawQuestions],
  currentExamFilter: 'all',
  currentCategoryFilter: 'all',
  searchQuery: '',
  mode: 'study', // 'study' | 'exam'
  viewType: 'paged', // 'paged' | 'list'
  currentIndex: 0,
  userAnswers: {}, // { [qId]: optionIndex }
  flaggedQuestions: new Set(),
  examSubmitted: false,
  examDurationMinutes: 30,
  timeRemainingSeconds: 30 * 60,
  timerInterval: null,
  isDark: false,
  shuffleQuestions: false
};

let dom = {};

function initDom() {
  dom = {
    themeToggle: document.getElementById('themeToggle'),
    examSelect: document.getElementById('examSelect'),
    categoryFilter: document.getElementById('categoryFilter'),
    searchInput: document.getElementById('searchInput'),
    modeStudyBtn: document.getElementById('modeStudyBtn'),
    modeExamBtn: document.getElementById('modeExamBtn'),
    viewPagedBtn: document.getElementById('viewPagedBtn'),
    viewListBtn: document.getElementById('viewListBtn'),
    shuffleToggle: document.getElementById('shuffleToggle'),
    resetBtn: document.getElementById('resetBtn'),

    timerContainer: document.getElementById('timerContainer'),
    timerText: document.getElementById('timerText'),
    progressText: document.getElementById('progressText'),
    progressBar: document.getElementById('progressBar'),
    scoreBadge: document.getElementById('scoreBadge'),

    mainQuizContainer: document.getElementById('mainQuizContainer'),
    paletteContainer: document.getElementById('paletteContainer'),
    summaryModal: document.getElementById('summaryModal'),
    modalContent: document.getElementById('modalContent'),
    submitExamBtn: document.getElementById('submitExamBtn'),

    pagedControls: document.getElementById('pagedControls'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    flagBtn: document.getElementById('flagBtn')
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initDom();
  loadSavedTheme();
  populateCategoryFilter();
  loadSavedState();
  applyFilters();
  bindEvents();
  renderApp();
});

function populateCategoryFilter() {
  const categories = Array.from(new Set(state.allQuestions.map(q => q.category)));
  dom.categoryFilter.innerHTML = '<option value="all">Tất cả chuyên đề (' + state.allQuestions.length + ' câu)</option>';
  categories.forEach(cat => {
    const count = state.allQuestions.filter(q => q.category === cat).length;
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = `${cat} (${count})`;
    dom.categoryFilter.appendChild(opt);
  });
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('mmt_quiz_theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    state.isDark = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    state.isDark = false;
    document.documentElement.removeAttribute('data-theme');
  }
  updateThemeIcon();
}

function toggleTheme() {
  state.isDark = !state.isDark;
  if (state.isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('mmt_quiz_theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('mmt_quiz_theme', 'light');
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  if (!dom.themeToggle) return;
  dom.themeToggle.innerHTML = state.isDark
    ? `<svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/></svg>`
    : `<svg class="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`;
}

function loadSavedState() {
  try {
    const saved = localStorage.getItem('mmt_quiz_answers');
    if (saved) state.userAnswers = JSON.parse(saved);

    const flagged = localStorage.getItem('mmt_quiz_flagged');
    if (flagged) state.flaggedQuestions = new Set(JSON.parse(flagged));
  } catch (e) {
    console.error('Failed to load state', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('mmt_quiz_answers', JSON.stringify(state.userAnswers));
    localStorage.setItem('mmt_quiz_flagged', JSON.stringify(Array.from(state.flaggedQuestions)));
  } catch (e) {
    console.error('Failed to save state', e);
  }
}

function bindEvents() {
  dom.themeToggle.addEventListener('click', toggleTheme);

  dom.examSelect.addEventListener('change', (e) => {
    state.currentExamFilter = e.target.value;
    state.currentIndex = 0;
    applyFilters();
    if (state.mode === 'exam') startExam();
    renderApp();
  });

  dom.categoryFilter.addEventListener('change', (e) => {
    state.currentCategoryFilter = e.target.value;
    state.currentIndex = 0;
    applyFilters();
    renderApp();
  });

  dom.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    state.currentIndex = 0;
    applyFilters();
    renderApp();
  });

  dom.modeStudyBtn.addEventListener('click', () => setMode('study'));
  dom.modeExamBtn.addEventListener('click', () => setMode('exam'));
  dom.viewPagedBtn.addEventListener('click', () => setViewType('paged'));
  dom.viewListBtn.addEventListener('click', () => setViewType('list'));

  dom.shuffleToggle.addEventListener('click', () => {
    state.shuffleQuestions = !state.shuffleQuestions;
    dom.shuffleToggle.classList.toggle('bg-blue-600', state.shuffleQuestions);
    dom.shuffleToggle.classList.toggle('text-white', state.shuffleQuestions);
    applyFilters();
    renderApp();
  });

  dom.resetBtn.addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn làm lại từ đầu và xóa toàn bộ câu trả lời hiện tại?')) {
      state.userAnswers = {};
      state.flaggedQuestions.clear();
      state.examSubmitted = false;
      saveState();
      if (state.mode === 'exam') startExam();
      renderApp();
    }
  });

  dom.prevBtn.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  dom.nextBtn.addEventListener('click', () => {
    if (state.currentIndex < state.filteredQuestions.length - 1) {
      state.currentIndex++;
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  dom.flagBtn.addEventListener('click', () => {
    const currentQ = state.filteredQuestions[state.currentIndex];
    if (!currentQ) return;
    if (state.flaggedQuestions.has(currentQ.id)) {
      state.flaggedQuestions.delete(currentQ.id);
    } else {
      state.flaggedQuestions.add(currentQ.id);
    }
    saveState();
    renderApp();
  });

  dom.submitExamBtn.addEventListener('click', () => {
    const total = state.filteredQuestions.length;
    const answered = state.filteredQuestions.filter(q => state.userAnswers[q.id] !== undefined).length;
    if (answered < total) {
      if (!confirm(`Bạn mới trả lời ${answered}/${total} câu hỏi. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`)) {
        return;
      }
    }
    submitExam();
  });

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (state.viewType === 'paged') {
      if (e.key === 'ArrowLeft') dom.prevBtn.click();
      if (e.key === 'ArrowRight') dom.nextBtn.click();
      if (['1', '2', '3', '4'].includes(e.key)) {
        const currentQ = state.filteredQuestions[state.currentIndex];
        if (currentQ) selectOption(currentQ.id, parseInt(e.key) - 1);
      }
    }
  });
}

function setMode(newMode) {
  if (state.mode === newMode) return;
  state.mode = newMode;
  if (newMode === 'exam') {
    dom.modeExamBtn.className = 'px-4 py-2 text-sm font-semibold rounded-lg bg-red-600 text-white shadow-sm transition';
    dom.modeStudyBtn.className = 'px-4 py-2 text-sm font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 transition';
    dom.submitExamBtn.classList.remove('hidden');
    dom.timerContainer.classList.remove('hidden');
    startExam();
  } else {
    dom.modeStudyBtn.className = 'px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white shadow-sm transition';
    dom.modeExamBtn.className = 'px-4 py-2 text-sm font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 transition';
    dom.submitExamBtn.classList.add('hidden');
    dom.timerContainer.classList.add('hidden');
    clearInterval(state.timerInterval);
    state.examSubmitted = false;
  }
  renderApp();
}

function setViewType(type) {
  state.viewType = type;
  if (type === 'paged') {
    dom.viewPagedBtn.className = 'px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm';
    dom.viewListBtn.className = 'px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900';
    dom.pagedControls.classList.remove('hidden');
  } else {
    dom.viewListBtn.className = 'px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm';
    dom.viewPagedBtn.className = 'px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900';
    dom.pagedControls.classList.add('hidden');
  }
  renderApp();
}

function startExam() {
  clearInterval(state.timerInterval);
  state.examSubmitted = false;
  const count = state.filteredQuestions.length;
  state.examDurationMinutes = Math.max(10, Math.ceil(count * 1.0));
  state.timeRemainingSeconds = state.examDurationMinutes * 60;
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timeRemainingSeconds--;
    updateTimerDisplay();
    if (state.timeRemainingSeconds <= 0) {
      clearInterval(state.timerInterval);
      alert('Đã hết thời gian làm bài! Hệ thống đang tự động nộp bài.');
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timeRemainingSeconds / 60);
  const secs = state.timeRemainingSeconds % 60;
  dom.timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  if (state.timeRemainingSeconds <= 300) {
    dom.timerText.classList.add('text-red-500', 'animate-pulse');
  } else {
    dom.timerText.classList.remove('text-red-500', 'animate-pulse');
  }
}

function submitExam() {
  clearInterval(state.timerInterval);
  state.examSubmitted = true;
  renderApp();
  showExamSummaryModal();
}

function applyFilters() {
  let list = [...state.allQuestions];

  if (state.currentExamFilter === '1') {
    list = list.filter(q => q.exam === 1);
  } else if (state.currentExamFilter === '2') {
    list = list.filter(q => q.exam === 2);
  } else if (state.currentExamFilter === 'saved') {
    list = list.filter(q => state.flaggedQuestions.has(q.id));
  } else if (state.currentExamFilter === 'wrong') {
    list = list.filter(q => state.userAnswers[q.id] !== undefined && state.userAnswers[q.id] !== q.correct);
  }

  if (state.currentCategoryFilter !== 'all') {
    list = list.filter(q => q.category === state.currentCategoryFilter);
  }

  if (state.searchQuery) {
    list = list.filter(q =>
      q.question.toLowerCase().includes(state.searchQuery) ||
      q.options.some(opt => opt.toLowerCase().includes(state.searchQuery)) ||
      q.category.toLowerCase().includes(state.searchQuery)
    );
  }

  if (state.shuffleQuestions) {
    list = [...list].sort(() => Math.random() - 0.5);
  }

  state.filteredQuestions = list;
  if (state.currentIndex >= list.length) {
    state.currentIndex = Math.max(0, list.length - 1);
  }
}

function selectOption(questionId, optIndex) {
  if (state.mode === 'exam' && state.examSubmitted) return;

  state.userAnswers[questionId] = optIndex;
  saveState();
  renderApp();
}

function renderApp() {
  renderProgress();
  renderPalette();
  if (state.viewType === 'paged') {
    renderPagedView();
  } else {
    renderListView();
  }
}

function renderProgress() {
  const total = state.filteredQuestions.length;
  const answered = state.filteredQuestions.filter(q => state.userAnswers[q.id] !== undefined).length;
  const percent = total > 0 ? Math.round((answered / total) * 100) : 0;

  dom.progressText.textContent = `${answered} / ${total} câu đã làm (${percent}%)`;
  dom.progressBar.style.width = `${percent}%`;

  if (state.mode === 'study' || state.examSubmitted) {
    let correct = 0;
    state.filteredQuestions.forEach(q => {
      if (state.userAnswers[q.id] === q.correct) correct++;
    });
    const score10 = total > 0 ? ((correct / total) * 10).toFixed(1) : '0.0';
    dom.scoreBadge.classList.remove('hidden');
    dom.scoreBadge.textContent = `Điểm: ${score10}/10 (${correct}/${total} câu đúng)`;
  } else {
    dom.scoreBadge.classList.add('hidden');
  }
}

function renderPalette() {
  dom.paletteContainer.innerHTML = '';
  if (state.filteredQuestions.length === 0) {
    dom.paletteContainer.innerHTML = '<p class="text-xs text-slate-500 col-span-5 text-center py-2">Không có câu hỏi.</p>';
    return;
  }

  state.filteredQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = idx + 1;

    const isAnswered = state.userAnswers[q.id] !== undefined;
    const isFlagged = state.flaggedQuestions.has(q.id);
    const isActive = state.viewType === 'paged' && state.currentIndex === idx;

    if (isActive) btn.classList.add('active');
    if (isFlagged) btn.classList.add('marked');

    if (isAnswered) {
      if (state.mode === 'study' || state.examSubmitted) {
        if (state.userAnswers[q.id] === q.correct) {
          btn.classList.add('correct-eval');
        } else {
          btn.classList.add('wrong-eval');
        }
      } else {
        btn.classList.add('answered');
      }
    }

    btn.addEventListener('click', () => {
      state.currentIndex = idx;
      if (state.viewType === 'list') {
        const targetCard = document.getElementById(`q-card-${q.id}`);
        if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        renderApp();
      }
    });

    dom.paletteContainer.appendChild(btn);
  });
}

function renderPagedView() {
  if (state.filteredQuestions.length === 0) {
    dom.mainQuizContainer.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-700 shadow-sm">
        <p class="text-slate-500 dark:text-slate-400 text-lg">Không tìm thấy câu hỏi nào phù hợp với bộ lọc!</p>
        <button onclick="resetFilter()" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Đặt lại bộ lọc</button>
      </div>
    `;
    dom.pagedControls.classList.add('hidden');
    return;
  }

  dom.pagedControls.classList.remove('hidden');
  const q = state.filteredQuestions[state.currentIndex];
  dom.mainQuizContainer.innerHTML = createQuestionCardHtml(q, state.currentIndex, false);

  dom.prevBtn.disabled = state.currentIndex === 0;
  dom.nextBtn.disabled = state.currentIndex === state.filteredQuestions.length - 1;

  const isFlagged = state.flaggedQuestions.has(q.id);
  dom.flagBtn.innerHTML = isFlagged
    ? `<svg class="w-5 h-5 text-amber-500 fill-current mr-1.5" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg> Đã đánh dấu`
    : `<svg class="w-5 h-5 text-slate-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg> Đánh dấu xem lại`;
}

function renderListView() {
  if (state.filteredQuestions.length === 0) {
    dom.mainQuizContainer.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-700 shadow-sm">
        <p class="text-slate-500 dark:text-slate-400 text-lg">Không tìm thấy câu hỏi nào phù hợp!</p>
      </div>
    `;
    return;
  }

  dom.mainQuizContainer.innerHTML = state.filteredQuestions.map((q, idx) => createQuestionCardHtml(q, idx, true)).join('');
}

function createQuestionCardHtml(q, displayIdx, isList) {
  const selected = state.userAnswers[q.id];
  const isAnswered = selected !== undefined;
  const isStudy = state.mode === 'study';
  const showFeedback = isStudy || state.examSubmitted;
  const isFlagged = state.flaggedQuestions.has(q.id);

  const letters = ['A', 'B', 'C', 'D'];

  const optionsHtml = q.options.map((opt, optIdx) => {
    let optionClass = 'option-label';
    let checkIcon = '';

    if (showFeedback && isAnswered) {
      if (optIdx === q.correct) {
        optionClass += ' correct';
        checkIcon = `<span class="ml-auto text-green-600 font-bold flex items-center"><svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Đáp án đúng</span>`;
      } else if (optIdx === selected) {
        optionClass += ' incorrect';
        checkIcon = `<span class="ml-auto text-red-600 font-bold flex items-center"><svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg> Lựa chọn sai</span>`;
      }
    } else if (optIdx === selected) {
      optionClass += ' selected';
    }

    return `
      <div class="${optionClass} mb-3" onclick="selectOption(${q.id}, ${optIdx})">
        <div class="w-7 h-7 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center font-bold text-xs mr-3 shrink-0 ${optIdx === selected ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}">
          ${letters[optIdx]}
        </div>
        <div class="flex-1 text-slate-800 dark:text-slate-200 text-sm md:text-base leading-relaxed">
          ${opt}
        </div>
        ${checkIcon}
      </div>
    `;
  }).join('');

  let explanationHtml = '';
  if (showFeedback && isAnswered) {
    const isCorrect = selected === q.correct;
    explanationHtml = `
      <div class="mt-4 p-4 rounded-xl border ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-900 dark:text-red-200'} fade-in">
        <div class="flex items-center font-bold mb-1.5">
          ${isCorrect
            ? '<svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Chính xác!'
            : '<svg class="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg> Chưa chính xác!'
          }
          <span class="ml-2 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-300">Đáp án đúng: ${letters[q.correct]}</span>
        </div>
        <p class="text-sm leading-relaxed mt-2"><strong class="font-semibold">Giải thích chi tiết:</strong> ${q.explanation}</p>
      </div>
    `;
  }

  const examBadge = q.exam === 1
    ? '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">Đề 1: Lý Thuyết MMT</span>'
    : '<span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300">Đề 2: Công Cụ & Lệnh Mạng</span>';

  return `
    <div id="q-card-${q.id}" class="bg-white dark:bg-slate-800 rounded-2xl p-5 md:p-7 border border-slate-200 dark:border-slate-700 shadow-sm mb-6 fade-in">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/60">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold text-sm">Câu ${displayIdx + 1}</span>
          ${examBadge}
          <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">${q.category}</span>
        </div>
        ${isList ? `
          <button onclick="toggleQuestionFlag(${q.id})" class="text-xs font-semibold flex items-center px-2.5 py-1 rounded-md border ${isFlagged ? 'border-amber-300 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' : 'border-slate-200 dark:border-slate-700 text-slate-500'}">
            ${isFlagged ? '★ Đã lưu' : '☆ Đánh dấu'}
          </button>
        ` : ''}
      </div>

      <h3 class="text-base md:text-lg font-semibold text-slate-900 dark:text-white mb-5 leading-snack">
        ${q.question}
      </h3>

      <div class="options-container space-y-1">
        ${optionsHtml}
      </div>

      ${explanationHtml}
    </div>
  `;
}

function toggleQuestionFlag(id) {
  if (state.flaggedQuestions.has(id)) {
    state.flaggedQuestions.delete(id);
  } else {
    state.flaggedQuestions.add(id);
  }
  saveState();
  renderApp();
}

function resetFilter() {
  dom.examSelect.value = 'all';
  dom.categoryFilter.value = 'all';
  dom.searchInput.value = '';
  state.currentExamFilter = 'all';
  state.currentCategoryFilter = 'all';
  state.searchQuery = '';
  state.currentIndex = 0;
  applyFilters();
  renderApp();
}

function showExamSummaryModal() {
  const total = state.filteredQuestions.length;
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  state.filteredQuestions.forEach(q => {
    const ans = state.userAnswers[q.id];
    if (ans === undefined) unattempted++;
    else if (ans === q.correct) correct++;
    else wrong++;
  });

  const score10 = total > 0 ? ((correct / total) * 10).toFixed(2) : '0.00';
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  dom.modalContent.innerHTML = `
    <div class="text-center mb-6">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-full ${percent >= 80 ? 'bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400' : percent >= 50 ? 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400' : 'bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400'} mb-3">
        <span class="text-3xl font-extrabold">${score10}</span>
      </div>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">${percent >= 80 ? 'Xuất Sắc! 🎉' : percent >= 50 ? 'Đạt Yêu Cầu 👍' : 'Cần Ôn Luyện Thêm 📚'}</h2>
      <p class="text-sm text-slate-500 dark:text-slate-400">Bạn đã hoàn thành bài kiểm tra trắc nghiệm Mạng Máy Tính</p>
    </div>

    <div class="grid grid-cols-3 gap-3 mb-6">
      <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 text-center">
        <div class="text-xl font-bold text-emerald-600 dark:text-emerald-400">${correct}</div>
        <div class="text-xs text-slate-500 font-medium">Câu đúng</div>
      </div>
      <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800 text-center">
        <div class="text-xl font-bold text-rose-600 dark:text-rose-400">${wrong}</div>
        <div class="text-xs text-slate-500 font-medium">Câu sai</div>
      </div>
      <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 text-center">
        <div class="text-xl font-bold text-slate-600 dark:text-slate-300">${unattempted}</div>
        <div class="text-xs text-slate-500 font-medium">Chưa làm</div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-3">
      <button onclick="closeModal(); filterWrongOnly()" class="flex-1 px-4 py-2.5 rounded-xl bg-rose-600 text-white font-semibold text-sm hover:bg-rose-700 transition shadow-sm">
        Xem & Luyện lại câu sai (${wrong})
      </button>
      <button onclick="closeModal(); setViewType('list')" class="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-sm">
        Xem toàn bộ lời giải chi tiết
      </button>
    </div>
  `;

  dom.summaryModal.classList.remove('hidden');
}

function closeModal() {
  dom.summaryModal.classList.add('hidden');
}

function filterWrongOnly() {
  state.currentExamFilter = 'wrong';
  dom.examSelect.value = 'wrong';
  state.currentIndex = 0;
  applyFilters();
  renderApp();
}
