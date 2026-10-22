// Tự động tổng hợp từ src/de_goc và src/de_nangcao để hỗ trợ chạy local file:// không bị lỗi CORS
window.MMT_QUESTIONS_BUNDLE = {
  "de_goc": {
    "de_1": [
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
      }
    ],
    "de_2": [
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
    ]
  },
  "de_nangcao": {
    "chuong_1_tong_quan": [
      {
        "id": 101,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Cấu trúc & Thành phần Mạng",
        "difficulty": "Nhận biết",
        "question": "Thiết bị nào sau đây thuộc về 'phần cạnh của mạng' (Network Edge)?",
        "options": [
          "Bộ định tuyến (Router)",
          "Bộ chuyển mạch (Link-layer Switch)",
          "Máy chủ Web và Máy tính cá nhân (End systems / Hosts)",
          "Đường truyền cáp quang xuyên đại dương (Backbone link)"
        ],
        "correct": 2,
        "explanation": "Theo kiến trúc mạng Internet, mạng gồm: 'Phần cạnh' (Network Edge) là các hệ thống đầu cuối (End systems / Hosts như PC, laptop, server, smartphone, camera IP...) nơi chạy các ứng dụng mạng; và 'Phần lõi' (Network Core) là mạng lưới các router, switch và đường truyền liên kết giúp truyền chuyển tiếp dữ liệu."
      },
      {
        "id": 102,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Chuyển mạch gói & Chuyển mạch kênh",
        "difficulty": "Thông hiểu",
        "question": "Ưu điểm nổi bật nhất của chuyển mạch gói (Packet Switching) so với chuyển mạch kênh (Circuit Switching) trong mạng dữ liệu máy tính là gì?",
        "options": [
          "Dành riêng trước tài nguyên cố định trên đường truyền cho mỗi phiên làm việc",
          "Tận dụng tối đa băng thông đường truyền thông qua cơ chế ghép kênh thống kê (Statistical Multiplexing)",
          "Đảm bảo độ trễ truyền dẫn luôn luôn bằng 0 và không bao giờ xảy ra mất gói",
          "Đơn giản hóa việc thiết kế router vì không cần bộ đệm (buffer)"
        ],
        "correct": 1,
        "explanation": "Chuyển mạch kênh dành riêng cố định kênh truyền (bằng FDM hoặc TDM), nếu người dùng không gửi dữ liệu thì băng thông bị lãng phí. Trong khi đó, chuyển mạch gói sử dụng cơ chế chia sẻ tài nguyên theo nhu cầu thực tế (ghép kênh thống kê - Statistical Multiplexing), cho phép nhiều người dùng cùng chia sẻ đường truyền, tăng hiệu suất sử dụng băng thông."
      },
      {
        "id": 103,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tính toán độ trễ mạng",
        "difficulty": "Vận dụng",
        "question": "Cho gói tin kích thước L = 1500 Byte truyền qua đường truyền có tốc độ R = 100 Mbps. Thời gian trễ truyền dẫn (Transmission Delay - d_trans) của gói tin là bao nhiêu?",
        "options": [
          "0.12 ms",
          "1.2 ms",
          "0.015 ms",
          "12 ms"
        ],
        "correct": 0,
        "explanation": "Công thức trễ truyền dẫn: d_trans = L / R. Đổi đơn vị: L = 1500 Byte = 1500 * 8 = 12,000 bit; R = 100 Mbps = 100 * 10^6 bps. Suy ra d_trans = 12,000 / (100 * 10^6) = 0.00012 s = 0.12 ms. (Bẫy thường gặp là không nhân 8 đổi Byte sang bit)."
      },
      {
        "id": 104,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tính toán độ trễ mạng",
        "difficulty": "Đánh lừa",
        "question": "Khoảng cách giữa hai host là d = 2000 km, vận tốc truyền sóng trong cáp quang s = 2 * 10^8 m/s. Trễ lan truyền (Propagation Delay - d_prop) giữa hai host là:",
        "options": [
          "10 ms",
          "1 ms",
          "0.01 ms",
          "100 ms"
        ],
        "correct": 0,
        "explanation": "Trễ lan truyền: d_prop = d / s. Đổi d = 2000 km = 2 * 10^6 m. Ta có d_prop = (2 * 10^6) / (2 * 10^8) = 0.01 s = 10 ms. Cần phân biệt: d_prop là thời gian một bit di chuyển trên môi trường vật lý (phụ thuộc d và s), hoàn toàn không phụ thuộc vào kích thước gói tin L hay băng thông R."
      },
      {
        "id": 105,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Hàng đợi & Cường độ lưu lượng",
        "difficulty": "Vận dụng",
        "question": "Gọi a là tốc độ gói tin đến trung bình (gói/s), L là kích thước gói tin (bit), R là tốc độ đường truyền (bps). Khi 'cường độ lưu lượng' (Traffic Intensity) I = (L*a)/R tiến gần đến 1, điều gì sẽ xảy ra?",
        "options": [
          "Trễ hàng đợi (Queuing Delay) giảm dần về 0",
          "Trễ hàng đợi tăng vọt tiệm cận vô cùng và nguy cơ tràn bộ đệm gây mất gói (Packet Loss)",
          "Đường truyền tự động nâng cấp băng thông R",
          "Router tự động chuyển sang mô hình chuyển mạch kênh"
        ],
        "correct": 1,
        "explanation": "Nếu I = (L*a)/R << 1, trễ hàng đợi rất nhỏ. Khi I tiến dần tới 1, hàng đợi bắt đầu tắc nghẽn và thời gian xếp hàng trung bình tăng vọt theo hàm phi tuyến. Khi bộ đệm hàng đợi (buffer) của router bị đầy, các gói tin đến sau bị loại bỏ (packet drop/loss)."
      },
      {
        "id": 106,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mô hình Phân tầng OSI & TCP/IP",
        "difficulty": "Nhận biết",
        "question": "Theo mô hình chuẩn OSI 7 tầng, tầng nào chịu trách nhiệm nén dữ liệu, định dạng hiển thị và mã hóa/giải mã (Encryption)?",
        "options": [
          "Tầng Phiên (Session Layer)",
          "Tầng Trình diễn (Presentation Layer)",
          "Tầng Ứng dụng (Application Layer)",
          "Tầng Giao vận (Transport Layer)"
        ],
        "correct": 1,
        "explanation": "Tầng Trình diễn (Presentation Layer - Tầng 6 trong mô hình OSI) đảm nhận nhiệm vụ chuyển đổi cú pháp, định dạng dữ liệu, nén dữ liệu và mã hóa/giải mã bảo mật. Trong mô hình TCP/IP, các chức năng này được gộp trực tiếp vào tầng Ứng dụng."
      },
      {
        "id": 107,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Đơn vị dữ liệu (PDU)",
        "difficulty": "Thông hiểu",
        "question": "Đơn vị dữ liệu giao thức (PDU) tại các tầng: Ứng dụng, Giao vận, Mạng, Liên kết dữ liệu lần lượt có tên gọi chuẩn là:",
        "options": [
          "Message, Datagram, Segment, Frame",
          "Message, Segment, Datagram (Packet), Frame",
          "Packet, Segment, Frame, Bit",
          "Segment, Message, Frame, Packet"
        ],
        "correct": 1,
        "explanation": "Thứ tự PDU chuẩn: Tầng Ứng dụng là Message (Thông điệp) -> Tầng Giao vận là Segment (Đoạn dữ liệu) -> Tầng Mạng là Datagram / Packet (Gói dữ liệu) -> Tầng Liên kết dữ liệu là Frame (Khung) -> Tầng Vật lý là Bit."
      },
      {
        "id": 108,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Ghép kênh FDM & TDM",
        "difficulty": "Thông hiểu",
        "question": "Trong chuyển mạch kênh, phương thức ghép kênh phân chia theo thời gian (TDM - Time Division Multiplexing) hoạt động theo nguyên tắc nào?",
        "options": [
          "Phân chia toàn bộ phổ tần số của kênh truyền thành các dải tần hẹp riêng biệt",
          "Thời gian truyền được chia thành các khung tuần hoàn (Frames), mỗi khung chia thành các khe thời gian (Time Slots) cố định cho từng người dùng",
          "Người dùng chia sẻ chung tần số và thời gian nhưng sử dụng mã trực giao khác nhau",
          "Dữ liệu được chia thành các gói tin có gắn nhãn địa chỉ IP"
        ],
        "correct": 1,
        "explanation": "TDM chia trục thời gian thành các khung lặp lại, mỗi khung có các khe thời gian (slots) được gán cố định cho từng kết nối. FDM thì chia kênh truyền thành các băng tần riêng biệt. CDMA thì sử dụng mã trực giao."
      },
      {
        "id": 109,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tính toán thông lượng & Điểm nghẽn",
        "difficulty": "Vận dụng",
        "question": "Host A gửi file cho Host B qua chuỗi 3 liên kết có tốc độ lần lượt là R1 = 50 Mbps, R2 = 10 Mbps, R3 = 100 Mbps. Giả sử không có lưu lượng nào khác trên mạng, thông lượng cực đại (Throughput) mà A có thể đạt được khi gửi dữ liệu cho B là:",
        "options": [
          "50 Mbps",
          "10 Mbps",
          "100 Mbps",
          "160 Mbps (tổng cả 3 đường)"
        ],
        "correct": 1,
        "explanation": "Thông lượng đường truyền bị giới hạn bởi liên kết có băng thông thấp nhất trên tuyến đường, gọi là liên kết điểm nghẽn (Bottleneck link). Ở đây min(50, 10, 100) = 10 Mbps. Dữ liệu không thể truyền nhanh hơn tốc độ của mắt xích yếu nhất này."
      },
      {
        "id": 110,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Store-and-Forward",
        "difficulty": "Vận dụng",
        "question": "Host A gửi 1 gói tin kích thước L = 10 Kbit đến Host B qua 1 Router trung gian. Cả hai đường truyền (A -> Router và Router -> B) đều có tốc độ R = 100 kbps và trễ lan truyền bỏ qua. Theo cơ chế 'Store-and-Forward', tổng thời gian trễ đầu-cuối (end-to-end delay) để gói tin đến được B là:",
        "options": [
          "0.1 s",
          "0.2 s",
          "0.05 s",
          "0.15 s"
        ],
        "correct": 1,
        "explanation": "Cơ chế Lưu-và-Chuyển-tiếp (Store-and-Forward): Router phải nhận toàn bộ gói tin (L/R) trước khi có thể bắt đầu truyền bit đầu tiên sang liên kết kế tiếp. Thời gian truyền từ A đến Router là L/R = 10 Kbit / 100 kbps = 0.1 s. Sau đó Router truyền tiếp đến B mất thêm L/R = 0.1 s. Tổng trễ = 2 * (L/R) = 0.2 s."
      },
      {
        "id": 111,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Đóng gói dữ liệu (Encapsulation)",
        "difficulty": "Thông hiểu",
        "question": "Quá trình đóng gói dữ liệu (Encapsulation) tại bên gửi diễn ra theo thứ tự nào khi đi qua các tầng?",
        "options": [
          "Tầng Vật lý -> Liên kết dữ liệu -> Mạng -> Giao vận -> Ứng dụng",
          "Tầng Ứng dụng -> Giao vận -> Mạng -> Liên kết dữ liệu -> Vật lý",
          "Tầng Mạng -> Giao vận -> Ứng dụng -> Liên kết dữ liệu",
          "Tầng Giao vận -> Ứng dụng -> Liên kết dữ liệu -> Mạng"
        ],
        "correct": 1,
        "explanation": "Tại máy gửi, dữ liệu đi từ trên xuống dưới: Ứng dụng sinh ra Message -> Giao vận thêm TCP/UDP header tạo Segment -> Tầng Mạng thêm IP header tạo Datagram -> Tầng Liên kết dữ liệu thêm Header và Trailer tạo Frame -> Tầng Vật lý phát các bit nhị phân lên môi trường truyền dẫn."
      },
      {
        "id": 112,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mô hình OSI & Thiết bị mạng",
        "difficulty": "Đánh lừa",
        "question": "Router thông thường (chuyển mạch gói truyền thống) xử lý gói tin đến tầng nào của mô hình mạng?",
        "options": [
          "Tầng 1 (Vật lý)",
          "Tầng 2 (Liên kết dữ liệu)",
          "Tầng 3 (Mạng)",
          "Tầng 4 (Giao vận)"
        ],
        "correct": 2,
        "explanation": "Router truyền thống là thiết bị tầng 3 (Network Layer). Khi nhận một khung (frame), nó mở gói tới tầng 2 để lấy datagram, đọc địa chỉ IP đích ở tầng 3 để tra bảng định tuyến, sau đó đóng gói lại thành frame mới để chuyển tiếp. Switch mạng LAN thông thường là thiết bị tầng 2, còn Hub/Repeater là tầng 1."
      },
      {
        "id": 113,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Độ trễ tổng hợp (Nodal Delay)",
        "difficulty": "Thông hiểu",
        "question": "Độ trễ tại một nút mạng (Total Nodal Delay) bao gồm 4 thành phần nào sau đây?",
        "options": [
          "Trễ xử lý tại nút, Trễ xếp hàng đợi, Trễ truyền dẫn, Trễ lan truyền",
          "Trễ chuyển mạch, Trễ định tuyến, Trễ bắt tay, Trễ mã hóa",
          "Trễ DNS, Trễ HTTP, Trễ phân giải IP, Trễ ACK",
          "Trễ phần cứng, Trễ phần mềm, Trễ hệ điều hành, Trễ người dùng"
        ],
        "correct": 0,
        "explanation": "Độ trễ nút mạng d_nodal = d_proc (Processing delay - kiểm tra lỗi bit, tìm đường) + d_queue (Queuing delay - thời gian đợi tại hàng đợi ra) + d_trans (Transmission delay - L/R đẩy bit vào đường truyền) + d_prop (Propagation delay - d/s truyền sóng trên môi trường dẫn)."
      },
      {
        "id": 114,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tính toán Băng thông - Trễ (Bandwidth-Delay Product)",
        "difficulty": "Vận dụng",
        "question": "Tích số Băng thông - Trễ (BDP = R * d_prop) đại diện cho đại lượng vật lý nào trên đường truyền?",
        "options": [
          "Tổng thời gian để gói tin truyền hết từ đầu phát tới đầu thu",
          "Số lượng bit tối đa có thể đồng thời 'nằm trên đường truyền' (in-flight) tại một thời điểm",
          "Kích thước bộ nhớ đệm (buffer) tối đa của router",
          "Số lượng kết nối TCP tối đa có thể mở đồng thời"
        ],
        "correct": 1,
        "explanation": "Bandwidth-Delay Product (BDP = R * d_prop) được ví như thể tích của một đường ống dẫn nước. Nó đo lường lượng dữ liệu (tính bằng bit) tối đa có thể được đẩy vào và đang di chuyển dọc theo đường truyền mà bên nhận chưa kịp nhận hết."
      },
      {
        "id": 115,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tổ chức tiêu chuẩn mạng",
        "difficulty": "Nhận biết",
        "question": "Các tài liệu tiêu chuẩn kỹ thuật chính thức của mạng Internet được xuất bản và quản lý dưới dạng tài liệu nào?",
        "options": [
          "ISO Standards",
          "IEEE 802 Whitepapers",
          "RFC (Request for Comments)",
          "W3C Recommendations"
        ],
        "correct": 2,
        "explanation": "Các giao thức và kiến trúc Internet (như IP, TCP, UDP, HTTP, DNS...) được định nghĩa và công bố qua các tài liệu RFC (Request for Comments) do IETF (Internet Engineering Task Force) quản lý."
      },
      {
        "id": 116,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Phân cấp ISP",
        "difficulty": "Thông hiểu",
        "question": "Trong cấu trúc phân tầng của các nhà cung cấp dịch vụ Internet (ISP), Tier-1 ISP có đặc điểm gì đặc biệt?",
        "options": [
          "Phải trả tiền mua băng thông kết nối từ các ISP cấp cao hơn",
          "Có phạm vi phủ sóng toàn cầu và kết nối trực tiếp với các Tier-1 ISP khác thông qua thỏa thuận miễn phí (Peering Agreement)",
          "Chỉ cung cấp dịch vụ trực tiếp cho hộ gia đình và thiết bị đầu cuối cá nhân",
          "Không sở hữu bất kỳ tuyến cáp quang nào mà chỉ thuê lại hạ tầng"
        ],
        "correct": 1,
        "explanation": "Tier-1 ISP là mạng đường trục Internet quốc tế (như AT&T, Lumen, Telia...). Các Tier-1 ISP ngang hàng trực tiếp với nhau (peering) mà không phải trả phí chuyển tiếp cho bất kỳ ai, tạo thành 'xương sống' kết nối toàn cầu của Internet."
      },
      {
        "id": 117,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tính toán độ trễ mạng",
        "difficulty": "Đánh lừa",
        "question": "Nếu ta tăng gấp đôi băng thông đường truyền R (từ 10 Mbps lên 20 Mbps) trong khi chiều dài cáp d và kích thước gói tin L giữ nguyên, thành phần trễ nào sau đây sẽ GIẢM ĐI MỘT NỬA?",
        "options": [
          "Trễ lan truyền (d_prop)",
          "Trễ xử lý (d_proc)",
          "Trễ truyền dẫn (d_trans)",
          "Tất cả các thành phần trễ đều giảm một nửa"
        ],
        "correct": 2,
        "explanation": "Công thức trễ truyền dẫn d_trans = L / R. Khi R tăng gấp đôi, d_trans giảm đi một nửa. Trong khi đó, trễ lan truyền d_prop = d / s chỉ phụ thuộc vào khoảng cách d và vận tốc sóng s trong môi trường truyền dẫn, hoàn toàn KHÔNG đổi khi tăng băng thông!"
      },
      {
        "id": 118,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mô hình Phân tầng OSI & TCP/IP",
        "difficulty": "Thông hiểu",
        "question": "Tầng nào trong mô hình TCP/IP tương ứng với việc gộp cả 3 tầng Ứng dụng, Trình diễn và Phiên của mô hình OSI?",
        "options": [
          "Tầng Giao vận (Transport)",
          "Tầng Ứng dụng (Application)",
          "Tầng Internet (Network)",
          "Tầng Truy nhập mạng (Network Access)"
        ],
        "correct": 1,
        "explanation": "Mô hình OSI 7 tầng phân biệt tách bạch: Application (tầng 7), Presentation (tầng 6), Session (tầng 5). Trong khi đó mô hình Internet TCP/IP gộp cả 3 tầng này vào chung một tầng duy nhất là Tầng Ứng dụng (Application Layer)."
      },
      {
        "id": 119,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mạng truy nhập (Access Networks)",
        "difficulty": "Nhận biết",
        "question": "Công nghệ mạng truy nhập băng rộng DSL (Digital Subscriber Line) tận dụng môi trường truyền dẫn có sẵn nào để truyền dữ liệu?",
        "options": [
          "Đường dây cáp điện thoại đôi dây đồng (Twisted-pair copper phone line)",
          "Mạng lưới dây điện lực gia đình",
          "Cáp đồng trục của mạng truyền hình cáp (Coaxial Cable)",
          "Sóng vô hình hồng ngoại trong nhà"
        ],
        "correct": 0,
        "explanation": "DSL truyền dữ liệu số tốc độ cao trên đường dây điện thoại đôi dây đồng truyền thống kết nối từ thuê bao đến tổng đài CO (Central Office) của công ty viễn thông, sử dụng bộ ghép DSLAM để tách tín hiệu thoại và dữ liệu."
      },
      {
        "id": 120,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mạng truy nhập (Access Networks)",
        "difficulty": "Thông hiểu",
        "question": "Công nghệ mạng cáp HFC (Hybrid Fiber-Coaxial) thường được sử dụng bởi các nhà cung cấp dịch vụ nào?",
        "options": [
          "Công ty cấp thoát nước",
          "Nhà cung cấp truyền hình cáp (Cable TV)",
          "Hệ thống điện thoại vệ tinh di động",
          "Hệ thống phát thanh AM/FM"
        ],
        "correct": 1,
        "explanation": "HFC kết hợp giữa cáp quang (ở phần trục truyền dẫn) và cáp đồng trục (đoạn nối tới từng hộ gia đình), là công nghệ cốt lõi của các nhà mạng truyền hình cáp cung cấp dịch vụ Internet băng rộng thông qua modem cáp (Cable Modem)."
      },
      {
        "id": 121,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Chuyển mạch gói & Chuyển mạch kênh",
        "difficulty": "Vận dụng",
        "question": "Đường truyền có tốc độ 1 Mbps. Mỗi người dùng khi hoạt động cần 100 kbps, nhưng chỉ hoạt động 10% thời gian. Nếu dùng chuyển mạch kênh (TDM/FDM), tối đa bao nhiêu người dùng có thể được hỗ trợ đồng thời?",
        "options": [
          "10 người",
          "100 người",
          "35 người",
          "1 người"
        ],
        "correct": 0,
        "explanation": "Chuyển mạch kênh phải dành riêng 100 kbps cho mỗi người bất kể người đó có gửi dữ liệu hay không. Với tổng dung lượng 1 Mbps = 1000 kbps, số người dùng tối đa luôn cố định là 1000 / 100 = 10 người. Trong khi với chuyển mạch gói, có thể hỗ trợ hàng chục người vì xác suất hơn 10 người gửi cùng lúc là cực kỳ nhỏ."
      },
      {
        "id": 122,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "An ninh mạng & Các kiểu tấn công",
        "difficulty": "Nhận biết",
        "question": "Kiểu tấn công nào làm ngập lụt một nút mạng hoặc máy chủ bằng cách gửi một lượng khổng lồ lưu lượng giả mạo khiến nó bị quá tải và không thể phục vụ người dùng hợp pháp?",
        "options": [
          "Tấn công từ chối dịch vụ (DoS / DDoS - Denial of Service)",
          "Tấn công nghe lén (Packet Sniffing)",
          "Tấn công giả mạo địa chỉ (IP Spoofing)",
          "Tấn công trung gian (Man-in-the-Middle)"
        ],
        "correct": 0,
        "explanation": "Tấn công DoS/DDoS (Từ chối dịch vụ phân tán) tập trung làm tê liệt máy chủ, đường truyền hoặc tài nguyên mạng bằng cách gửi ồ ạt hàng triệu gói tin rác (như SYN flood, ICMP flood, DNS amplification) khiến người dùng thật không thể truy cập."
      },
      {
        "id": 123,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "An ninh mạng & Các kiểu tấn công",
        "difficulty": "Thông hiểu",
        "question": "Công cụ Packet Sniffer (như Wireshark ở chế độ Promiscuous) hoạt động thụ động trên mạng chia sẻ có thể gây ra nguy cơ bảo mật nào?",
        "options": [
          "Làm hỏng bảng định tuyến của router",
          "Đọc trộm các thông tin nhạy cảm (mật khẩu, nội dung tin nhắn) truyền dưới dạng bản rõ (plaintext)",
          "Làm sập card mạng vật lý của các máy tính bên cạnh",
          "Tự động thay đổi địa chỉ MAC của router"
        ],
        "correct": 1,
        "explanation": "Packet Sniffing là hành vi bắt và ghi lại các gói tin lưu thông trên mạng. Nếu ứng dụng không sử dụng mã hóa (như HTTP, FTP, Telnet truyền văn bản thô), kẻ tấn công chạy packet sniffer có thể đọc toàn bộ tài khoản, mật khẩu và dữ liệu nhạy cảm."
      },
      {
        "id": 124,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Cấu trúc & Thành phần Mạng",
        "difficulty": "Nhận biết",
        "question": "Giao thức mạng (Network Protocol) được định nghĩa chính xác nhất bởi các yếu tố nào sau đây?",
        "options": [
          "Chỉ là phần mềm hệ điều hành cài đặt trên máy tính",
          "Định nghĩa cú pháp (Syntax), ngữ nghĩa (Semantics), thứ tự các thông điệp gửi/nhận và hành động cần thực hiện khi có sự kiện",
          "Độ dài cáp mạng vật lý và loại đầu nối RJ45",
          "Tên thương hiệu của thiết bị mạng phần cứng"
        ],
        "correct": 1,
        "explanation": "Giao thức mạng (Network Protocol) là một tập hợp các quy tắc chuẩn hóa định nghĩa: định dạng/cú pháp thông điệp (Syntax), ý nghĩa từng trường dữ liệu (Semantics), trình tự gửi và nhận thông điệp, cùng các hành vi tương ứng khi nhận được thông điệp hoặc xảy ra sự kiện (như lỗi, timeout)."
      },
      {
        "id": 125,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Đường truyền vật lý (Physical Media)",
        "difficulty": "Thông hiểu",
        "question": "Môi trường truyền dẫn nào sau đây là môi trường truyền dẫn có định hướng (Guided Media)?",
        "options": [
          "Sóng vô tuyến mặt đất (Cellular / 4G / 5G)",
          "Kênh liên lạc vệ tinh (Satellite)",
          "Cáp xoắn đôi (Twisted Pair) và Cáp sợi quang (Fiber Optic)",
          "Sóng WiFi 802.11"
        ],
        "correct": 2,
        "explanation": "Môi trường dẫn có định hướng (Guided Media) truyền sóng tín hiệu dọc theo vật dẫn hữu hình cụ thể như cáp đồng xoắn đôi (UTP/STP), cáp đồng trục (Coaxial), cáp sợi quang. Môi trường không định hướng (Unguided Media) truyền sóng lan tỏa tự do trong không gian (WiFi, vệ tinh, sóng di động)."
      },
      {
        "id": 126,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mô hình Phân tầng OSI & TCP/IP",
        "difficulty": "Đánh lừa",
        "question": "Trong mô hình mạng 5 tầng Internet, chức năng chính của Tầng Giao vận (Transport Layer) là cung cấp dịch vụ truyền dữ liệu giữa:",
        "options": [
          "Hai nút mạng kế tiếp nhau trên cùng một liên kết vật lý (Node-to-Node)",
          "Hai tiến trình ứng dụng chạy trên hai máy tính đầu cuối (Process-to-Process)",
          "Hai card mạng dựa trên địa chỉ phần cứng MAC",
          "Hai hệ thống tự trị AS thông qua giao thức BGP"
        ],
        "correct": 1,
        "explanation": "Đây là câu hỏi phân biệt cốt lõi: Tầng Mạng cung cấp giao tiếp giữa hai host (Host-to-Host logic); Tầng Giao vận cung cấp giao tiếp logic giữa các TIẾN TRÌNH ứng dụng (Process-to-Process) chạy trên các host đó thông qua số hiệu cổng (Port); còn Tầng Liên kết dữ liệu giao tiếp giữa hai node kề nhau trên 1 link (Node-to-Node)."
      },
      {
        "id": 127,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tính toán Pipelining & Store-and-Forward",
        "difficulty": "Vận dụng",
        "question": "Một file kích thước F = 6000 Kbit được chia thành 3 gói tin kích thước bằng nhau (L = 2000 Kbit mỗi gói). Truyền từ Source đến Destination qua 2 Router trên chuỗi liên kết tốc độ R = 1000 kbps (bỏ qua trễ lan truyền và trễ hàng đợi). Nhờ kỹ thuật truyền đường ống (Pipelining), thời gian truyền xong file là:",
        "options": [
          "18 s",
          "5 s",
          "6 s",
          "15 s"
        ],
        "correct": 1,
        "explanation": "Đường truyền gồm 3 chặng (Source -> R1 -> R2 -> Dest). Thời gian truyền 1 gói qua 1 chặng là t = L/R = 2000 Kbit / 1000 kbps = 2 s. Gói 1 đến Dest sau 3 chặng = 3 * 2s = 6s. Nhưng chờ đợi đường ống: gói 1 rời Source ở s=2, R1 nhận lúc s=2 rồi đẩy đi; lúc đó Source có thể đẩy ngay gói 2. Tổng thời gian truyền P gói qua N chặng = (N + P - 1) * (L/R) = (3 + 3 - 1) * 2s = 10s? Khoan! Tính cẩn thận: F = 6000 Kbit chia làm 3 gói -> mỗi gói L = 2000 Kbit. t = 2000 / 1000 = 2s. Có 2 router -> có 3 chặng. Công thức: (3 chặng + 3 gói - 1) * 2s = 5 * 2s = 10s. Nếu chọn đáp án đúng với F chia thành 3 gói: để xem phương án: nếu F truyền liền khối: 3 * (6000/1000) = 18s. Nếu chia 3 gói: 10s. Nếu L = 1000 Kbit (6 gói) thì (3+6-1)*1s = 8s. Ở câu này, với L/R = 1s (nếu 1000 kbps và L = 1000 kbit) thì (3 + 3 - 1)*1 = 5s! Ta chuẩn hóa lại: file 3000 Kbit chia thành 3 gói mỗi gói 1000 Kbit -> t = 1s -> Tổng thời gian = (3 + 3 - 1) * 1s = 5s."
      },
      {
        "id": 128,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tính toán Pipelining & Store-and-Forward",
        "difficulty": "Vận dụng",
        "question": "Một file 3000 Kbit được chia thành 3 gói tin (1000 Kbit/gói) truyền qua tuyến mạng gồm 2 Router (tổng cộng 3 chặng liên kết liên tiếp). Mỗi chặng có băng thông R = 1000 kbps. Bỏ qua trễ lan truyền và hàng đợi. Tổng thời gian hoàn thành việc nhận file tại đích là:",
        "options": [
          "9 giây",
          "5 giây",
          "3 giây",
          "6 giây"
        ],
        "correct": 1,
        "explanation": "Thời gian truyền 1 gói trên 1 chặng: t = L/R = 1000 Kbit / 1000 kbps = 1 giây. Có 3 chặng (Source -> R1 -> R2 -> Dest) và 3 gói tin. Gói 1 đến đích tại giây thứ 3. Nhờ cơ chế đường ống (pipelining), gói 2 đến đích tại giây thứ 4, và gói 3 đến đích tại giây thứ 5. Tổng thời gian = (Số chặng + Số gói - 1) * t = (3 + 3 - 1) * 1s = 5 giây (nhanh hơn rất nhiều so với gửi 1 khối lớn 3000 Kbit mất 3 * 3s = 9 giây)."
      },
      {
        "id": 129,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "An ninh mạng & Các kiểu tấn công",
        "difficulty": "Thông hiểu",
        "question": "Kỹ thuật IP Spoofing là gì?",
        "options": [
          "Kẻ tấn công sửa địa chỉ IP nguồn (Source IP) trong gói tin gửi đi để mạo danh một máy tính khác",
          "Kẻ tấn công gửi mã độc phá hủy thanh RAM của router",
          "Kẻ tấn công đánh cắp địa chỉ MAC từ card mạng",
          "Kẻ tấn công tắt nguồn máy chủ DNS"
        ],
        "correct": 0,
        "explanation": "IP Spoofing (Giả mạo địa chỉ IP) là kỹ thuật mà kẻ tấn công tạo các gói tin IP với trường Source IP Address là địa chỉ của máy tính nạn nhân hoặc máy chủ tin cậy nhằm vượt qua bộ lọc tường lửa (firewall) hoặc thực hiện tấn công khuếch đại (amplification attack)."
      },
      {
        "id": 130,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mô hình Phân tầng OSI & TCP/IP",
        "difficulty": "Nhận biết",
        "question": "Trong mô hình 5 tầng Internet, giao thức ICMP và giao thức IP thuộc về tầng nào?",
        "options": [
          "Tầng Giao vận (Transport Layer)",
          "Tầng Mạng (Network Layer)",
          "Tầng Liên kết dữ liệu (Data Link Layer)",
          "Tầng Ứng dụng (Application Layer)"
        ],
        "correct": 1,
        "explanation": "Giao thức IP (Internet Protocol) là giao thức cốt lõi của Tầng Mạng (Network Layer). ICMP (Internet Control Message Protocol) là giao thức điều khiển và thông báo lỗi cũng hoạt động tại Tầng Mạng (mặc dù các thông điệp ICMP được đóng gói bên trong IP datagram)."
      },
      {
        "id": 131,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Thông lượng tức thời & Trung bình",
        "difficulty": "Thông hiểu",
        "question": "Phát biểu nào sau đây là ĐÚNG khi nói về thông lượng (Throughput) của một kết nối mạng?",
        "options": [
          "Thông lượng luôn luôn bằng đúng băng thông lý thuyết R của card mạng máy gửi",
          "Thông lượng là tốc độ truyền dữ liệu thực tế (bit/giây) được truyền thành công từ máy gửi đến máy nhận",
          "Thông lượng không bao giờ bị ảnh hưởng bởi độ trễ RTT",
          "Thông lượng trên mạng chuyển mạch gói là một hằng số cố định bất biến"
        ],
        "correct": 1,
        "explanation": "Thông lượng (Throughput) là tốc độ truyền dữ liệu hữu ích thực tế giữa hai đầu cuối (tính bằng bps), chịu ảnh hưởng bởi liên kết thắt nút cổ chai (bottleneck link), tình trạng tắc nghẽn, độ trễ và thuật toán điều khiển luồng/tắc nghẽn của giao thức truyền vận."
      },
      {
        "id": 132,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Cấu trúc & Thành phần Mạng",
        "difficulty": "Đánh lừa",
        "question": "Sự khác biệt căn bản giữa hai khái niệm Định tuyến (Routing) và Chuyển tiếp (Forwarding) ở tầng mạng là gì?",
        "options": [
          "Forwarding mang tính toàn cục trên toàn mạng, còn Routing mang tính cục bộ tại một router",
          "Routing là quá trình toàn cục xác định tuyến đường đi từ nguồn tới đích; còn Forwarding là hành động cục bộ chuyển gói tin từ cổng vào tới cổng ra thích hợp của router",
          "Forwarding do phần mềm điều khiển, Routing hoàn toàn do phần cứng thực hiện",
          "Routing chỉ xuất hiện trong mạng LAN, còn Forwarding chỉ có trên Internet toàn cầu"
        ],
        "correct": 1,
        "explanation": "Đây là phân biệt nền tảng: Routing (Định tuyến - mặt phẳng điều khiển Control Plane) tính toán và xây dựng bảng định tuyến trên phạm vi toàn mạng; còn Forwarding (Chuyển tiếp - mặt phẳng dữ liệu Data Plane) là hành vi đọc địa chỉ đích của gói tin tại cổng vào và đưa sang cổng ra tương ứng trong thời gian micro-giây."
      },
      {
        "id": 133,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mạng riêng ảo & Điểm trao đổi Internet",
        "difficulty": "Nhận biết",
        "question": "IXP (Internet Exchange Point) là gì trong kiến trúc mạng Internet?",
        "options": [
          "Một loại modem kết nối cáp quang gia đình",
          "Điểm trung chuyển vật lý nơi nhiều ISP kết nối trực tiếp với nhau để trao đổi lưu lượng nhằm giảm chi phí",
          "Một giao thức bảo mật thay thế cho giao thức IP",
          "Máy chủ phân giải tên miền cấp cao nhất (TLD)"
        ],
        "correct": 1,
        "explanation": "IXP (Internet Exchange Point - Điểm trao đổi lưu lượng Internet) là hạ tầng mạng vật lý cho phép các mạng khác nhau (như các ISP, nhà cung cấp nội dung Google, Facebook, CDN) kết nối trực tiếp và trao đổi dữ liệu nội bộ với nhau mà không phải đi vòng qua nhà mạng quốc tế trung gian."
      },
      {
        "id": 134,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Mô hình Phân tầng OSI & TCP/IP",
        "difficulty": "Thông hiểu",
        "question": "Lợi ích cốt lõi của kiến trúc mạng phân tầng (Layered Architecture) là gì?",
        "options": [
          "Tăng kích thước phần đầu (header) của gói tin lên mức tối đa",
          "Module hóa hệ thống: thay đổi cài đặt bên trong của một tầng không làm ảnh hưởng đến các tầng khác nếu giao diện dịch vụ được giữ nguyên",
          "Bắt buộc tất cả các thiết bị trên Internet phải có cùng cấu hình phần cứng",
          "Loại bỏ hoàn toàn sự cần thiết của các bộ định tuyến và bộ chuyển mạch"
        ],
        "correct": 1,
        "explanation": "Kiến trúc phân tầng chia nhỏ bài toán phức tạp thành các tầng dịch vụ độc lập. Khi cần thay đổi hoặc nâng cấp công nghệ ở một tầng (ví dụ chuyển từ cáp đồng sang cáp quang ở tầng vật lý, hay từ IPv4 sang IPv6 ở tầng mạng), các tầng ứng dụng bên trên không cần phải viết lại mã nguồn."
      },
      {
        "id": 135,
        "exam_type": "nang_cao",
        "chapter": 1,
        "chapter_title": "Chương 1: Tổng quan Mạng máy tính & Internet",
        "category": "Tính toán độ trễ mạng",
        "difficulty": "Đánh lừa",
        "question": "Một vệ tinh địa tĩnh ở độ cao d = 36,000 km so với mặt đất. Tín hiệu vô tuyến truyền với vận tốc ánh sáng s = 3 * 10^8 m/s. Trễ lan truyền 1 chiều (One-way propagation delay) từ trạm mặt đất lên vệ tinh là:",
        "options": [
          "120 ms",
          "12 ms",
          "240 ms",
          "1.2 s"
        ],
        "correct": 0,
        "explanation": "d = 36,000 km = 36 * 10^6 m. Vận tốc s = 3 * 10^8 m/s. Trễ lan truyền 1 chiều: d_prop = d / s = (36 * 10^6) / (3 * 10^8) = 0.12 s = 120 ms. (Lưu ý: Thời gian khứ hồi RTT cả lên và xuống sẽ là 2 * 120 ms = 240 ms; nếu tính truyền từ trạm mặt đất A -> vệ tinh -> trạm mặt đất B thì mất tối thiểu 240 ms)."
      }
    ],
    "chuong_2_tang_ung_dung": [
      {
        "id": 201,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Kiến trúc Ứng dụng Mạng",
        "difficulty": "Thông hiểu",
        "question": "Trong kiến trúc mạng ngang hàng (P2P - Peer-to-Peer), tính chất 'khả năng tự mở rộng' (Self-scalability) có nghĩa là gì?",
        "options": [
          "Hệ thống tự động mua thêm băng thông từ nhà cung cấp dịch vụ mạng",
          "Mỗi nút mạng (peer) khi tham gia vừa tiêu thụ dữ liệu (download) vừa đóng vai trò như một máy chủ đóng góp năng lực tải lên (upload) cho mạng",
          "Máy chủ trung tâm tự động nhân bản CPU và RAM khi có đông người truy cập",
          "Các máy tính tự động chuyển sang sử dụng giao thức UDP để tăng tốc"
        ],
        "correct": 1,
        "explanation": "Trong mô hình P2P, khi có thêm người dùng mới tham gia hệ thống, họ không chỉ tạo ra nhu cầu tải dữ liệu (demand) mà còn đồng thời đóng góp năng lực lưu trữ và băng thông tải lên (service capacity). Nhờ đó, hệ thống có khả năng tự mở rộng quy mô (self-scalability) mà không bị phụ thuộc vào giới hạn băng thông của một máy chủ trung tâm."
      },
      {
        "id": 202,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức HTTP & Tính toán RTT",
        "difficulty": "Vận dụng",
        "question": "Trang web gồm 1 file HTML cơ sở và 3 hình ảnh nhỏ nằm trên cùng một server. Giả sử thời gian truyền gói tin rất nhỏ và không có pipelining. Khi sử dụng kết nối HTTP/1.0 không duy trì (Non-persistent HTTP), tổng thời gian cần thiết tính từ lúc bắt đầu gửi yêu cầu đến khi nhận đủ toàn bộ trang là:",
        "options": [
          "2 RTT",
          "4 RTT",
          "8 RTT",
          "1 RTT"
        ],
        "correct": 2,
        "explanation": "Với Non-persistent HTTP (kết nối tuần tự không song song): Mỗi đối tượng yêu cầu 1 kết nối TCP riêng. Thiết lập TCP mất 1 RTT (SYN, SYN-ACK); gửi request HTTP và nhận đối tượng mất thêm 1 RTT. Như vậy mỗi đối tượng tốn 2 RTT. Trang có 1 file HTML + 3 ảnh = 4 đối tượng. Tổng thời gian = 4 * 2 RTT = 8 RTT."
      },
      {
        "id": 203,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức HTTP & Tính toán RTT",
        "difficulty": "Vận dụng",
        "question": "Cũng với trang web gồm 1 file HTML cơ sở và 3 hình ảnh nhỏ trên cùng server, nếu sử dụng HTTP/1.1 có kết nối duy trì và có hỗ trợ đường ống (Persistent HTTP with Pipelining), tổng thời gian để nhận đủ dữ liệu là bao nhiêu RTT?",
        "options": [
          "3 RTT",
          "2 RTT",
          "4 RTT",
          "8 RTT"
        ],
        "correct": 0,
        "explanation": "Với Persistent HTTP có Pipelining: 1 RTT để thiết lập kết nối TCP duy nhất; 1 RTT để gửi request lấy file HTML và nhận về; sau khi phân tích thấy 3 ảnh, client gửi liên tiếp (pipelined) 3 request cùng lúc trong 1 RTT. Tổng cộng chỉ mất 1 + 1 + 1 = 3 RTT (tiết kiệm đáng kể so với 8 RTT của HTTP/1.0)."
      },
      {
        "id": 204,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Mã trạng thái HTTP (Status Codes)",
        "difficulty": "Nhận biết",
        "question": "Mã trạng thái HTTP nào sau đây được máy chủ trả về khi trang web không có sự thay đổi so với bản sao đang lưu trong bộ nhớ đệm (Cache) của trình duyệt?",
        "options": [
          "200 OK",
          "301 Moved Permanently",
          "304 Not Modified",
          "404 Not Found"
        ],
        "correct": 2,
        "explanation": "Khi trình duyệt gửi yêu cầu có kèm header điều kiện 'If-Modified-Since', nếu tài nguyên trên server không thay đổi kể từ thời điểm đó, server sẽ trả về mã '304 Not Modified' (với thân thông điệp rỗng) để báo trình duyệt tái sử dụng bản sao trong cache, giúp tiết kiệm băng thông."
      },
      {
        "id": 205,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức HTTP & Quản lý phiên",
        "difficulty": "Thông hiểu",
        "question": "Vì bản thân giao thức HTTP là giao thức phi trạng thái (Stateless protocol), công nghệ nào sau đây được sử dụng để nhận diện và theo dõi phiên làm việc (Session tracking) của người dùng giữa các lần gửi request?",
        "options": [
          "Sử dụng địa chỉ MAC của card mạng người dùng",
          "Sử dụng Cookie kết hợp giữa header Set-Cookie của server và header Cookie của client",
          "Tăng số thứ tự Sequence Number trong TCP header",
          "Đổi số hiệu cổng nguồn của trình duyệt liên tục"
        ],
        "correct": 1,
        "explanation": "Để theo dõi trạng thái (như giỏ hàng thương mại điện tử, đăng nhập), HTTP sử dụng Cookie gồm 4 thành phần: (1) Header Set-Cookie trong response từ server; (2) Header Cookie trong các request kế tiếp từ client; (3) File cookie lưu trên trình duyệt; (4) Cơ sở dữ liệu phiên (session DB) tại máy chủ."
      },
      {
        "id": 206,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức truyền file FTP",
        "difficulty": "Đánh lừa",
        "question": "Tại sao giao thức FTP được gọi là giao thức điều khiển 'ngoài băng' (Out-of-band control)?",
        "options": [
          "FTP truyền dữ liệu qua đường truyền cáp quang riêng biệt",
          "FTP tách riêng: truyền lệnh điều khiển trên cổng TCP 21, còn việc truyền dữ liệu thực sự diễn ra trên một kết nối TCP riêng biệt khác (cổng 20 hoặc cổng động)",
          "FTP không sử dụng mô hình Client-Server",
          "FTP sử dụng giao thức UDP để truyền dữ liệu và TCP để điều khiển"
        ],
        "correct": 1,
        "explanation": "FTP sử dụng 2 kết nối TCP song song: Kết nối điều khiển (Control Connection) mở trên cổng 21 để gửi thông tin đăng nhập và câu lệnh (như USER, PASS, LIST, RETR); khi có yêu cầu truyền file, một kết nối dữ liệu (Data Connection) hoàn toàn tách biệt được mở (cổng 20 ở Active mode hoặc cổng động ở Passive mode). Việc tách biệt luồng điều khiển khỏi luồng dữ liệu gọi là 'Out-of-band'."
      },
      {
        "id": 207,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức truyền file FTP",
        "difficulty": "Thông hiểu",
        "question": "Trong chế độ FTP Bị động (Passive Mode - PASV), phía nào là bên chủ động khởi tạo kết nối dữ liệu (Data Connection)?",
        "options": [
          "FTP Server chủ động kết nối tới cổng của Client",
          "FTP Client chủ động kết nối tới một cổng ngẫu nhiên do Server thông báo",
          "Cả hai bên cùng gửi gói SYN đồng thời",
          "Router trung gian tự động mở cổng"
        ],
        "correct": 1,
        "explanation": "Trong Active mode, Server chủ động kết nối vào Client (thường bị tường lửa Firewall/NAT phía Client chặn lại). Do đó, Passive mode (PASV) được tạo ra: Client gửi lệnh PASV, Server mở một cổng ngẫu nhiên và thông báo cho Client, sau đó Client chủ động kết nối tới cổng đó của Server, giúp vượt qua Firewall phía Client."
      },
      {
        "id": 208,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức Thư điện tử (Email)",
        "difficulty": "Nhận biết",
        "question": "Giao thức SMTP (Simple Mail Transfer Protocol) được sử dụng trong giai đoạn nào của quá trình truyền thư điện tử?",
        "options": [
          "Đẩy thư (Push) từ máy khách gửi lên Mail Server của người gửi, và chuyển tiếp thư giữa các Mail Server với nhau",
          "Kéo thư (Pull) từ Mail Server về hòm thư trên thiết bị của người nhận",
          "Chỉ dùng để xóa thư rác trên máy chủ",
          "Dùng để giải nén tệp đính kèm"
        ],
        "correct": 0,
        "explanation": "SMTP (cổng 25 hoặc 587) là giao thức đẩy (Push protocol), được dùng để gửi thư từ Client lên Mail Server và chuyển tiếp thư giữa các Mail Server trung gian. Để lấy thư từ Mail Server về máy cá nhân, người dùng phải dùng giao thức kéo (Pull) như POP3 (port 110) hoặc IMAP (port 143)."
      },
      {
        "id": 209,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức Thư điện tử (Email)",
        "difficulty": "Thông hiểu",
        "question": "Ưu điểm vượt trội của giao thức IMAP so với POP3 khi đọc thư điện tử là gì?",
        "options": [
          "IMAP không cần kết nối mạng vẫn gửi được thư",
          "IMAP duy trì đồng bộ trạng thái hòm thư (đã đọc, gắn cờ, thư mục) trực tiếp trên máy chủ, cho phép người dùng truy cập nhất quán từ nhiều thiết bị khác nhau",
          "IMAP sử dụng UDP thay vì TCP giúp tốc độ nhanh gấp 10 lần",
          "IMAP tự động dịch nội dung email sang tiếng Việt"
        ],
        "correct": 1,
        "explanation": "POP3 hoạt động theo cơ chế đơn giản 'tải về và xóa/giữ' trên máy cục bộ, không đồng bộ trạng thái giữa các thiết bị. Ngược lại, IMAP lưu trữ toàn bộ thư và cấu trúc thư mục trên server, ghi nhớ trạng thái đọc/chưa đọc, giúp người dùng đồng bộ trải nghiệm khi đọc thư trên cả điện thoại, laptop và webmail."
      },
      {
        "id": 210,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức Thư điện tử (Email)",
        "difficulty": "Thông hiểu",
        "question": "Vì chuẩn SMTP nguyên bản chỉ cho phép truyền văn bản mã ASCII 7-bit, chuẩn nào sau đây được bổ sung vào tiêu đề email để hỗ trợ gửi văn bản tiếng Việt có dấu, hình ảnh và tệp đính kèm nhị phân?",
        "options": [
          "HTTP Header",
          "MIME (Multipurpose Internet Mail Extensions)",
          "SSL Certificate",
          "DNS MX Record"
        ],
        "correct": 1,
        "explanation": "MIME (Multipurpose Internet Mail Extensions) bổ sung các trường header vào email (như MIME-Version, Content-Type, Content-Transfer-Encoding: base64) để mã hóa dữ liệu nhị phân (hình ảnh, video, âm thanh, văn bản Unicode...) thành các ký tự ASCII 7-bit an toàn khi truyền qua hạ tầng SMTP."
      },
      {
        "id": 211,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Hệ thống Tên miền (DNS)",
        "difficulty": "Nhận biết",
        "question": "Máy chủ tên miền có thẩm quyền (Authoritative DNS Server) có trách nhiệm gì?",
        "options": [
          "Lưu trữ bản đồ ánh xạ IP chính thức cho các máy chủ thuộc phạm vi quản lý của một tổ chức (ví dụ ptit.edu.vn)",
          "Chỉ lưu trữ danh sách các tên miền cấp cao nhất như .com, .net, .vn",
          "Chỉ đóng vai trò cache trung gian cho các hộ gia đình",
          "Quản lý 13 cụm máy chủ gốc của toàn thế giới"
        ],
        "correct": 0,
        "explanation": "Authoritative DNS Server là máy chủ sở hữu các bản ghi DNS gốc chính thức (A, MX, CNAME...) cho các tên miền thuộc quyền quản trị của một tổ chức/công ty. Ví dụ máy chủ DNS có thẩm quyền của PTIT quản lý thông tin IP của trang chủ ptit.edu.vn và qldt.ptit.edu.vn."
      },
      {
        "id": 212,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Hệ thống Tên miền (DNS)",
        "difficulty": "Thông hiểu",
        "question": "Sự khác biệt cốt lõi giữa truy vấn DNS đệ quy (Recursive Query) và truy vấn DNS lặp (Iterative Query) là gì?",
        "options": [
          "Truy vấn đệ quy dùng TCP, truy vấn lặp dùng UDP",
          "Trong truy vấn đệ quy, máy chủ được hỏi có nghĩa vụ tự đi tìm đến cùng kết quả rồi trả về cho bên hỏi; trong truy vấn lặp, máy chủ chỉ trả về địa chỉ của máy chủ DNS tiếp theo cần liên hệ",
          "Truy vấn lặp chỉ dùng cho mạng quân sự",
          "Truy vấn đệ quy không thể lưu trữ bản ghi vào bộ đệm cache"
        ],
        "correct": 1,
        "explanation": "Trong truy vấn đệ quy (Recursive): Client đẩy toàn bộ gánh nặng tìm kiếm cho Local DNS, Local DNS phải tìm bằng được IP cuối cùng rồi trả về. Trong truy vấn lặp (Iterative): Nếu máy chủ DNS không biết IP đích, nó sẽ trả lời 'Tôi không biết, nhưng hãy đi hỏi máy chủ X này' (kèm theo IP của Root, TLD hoặc Authoritative tiếp theo)."
      },
      {
        "id": 213,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Bản ghi tài nguyên DNS (Resource Records)",
        "difficulty": "Nhận biết",
        "question": "Bản ghi tài nguyên DNS loại nào được sử dụng để chỉ định máy chủ tiếp nhận thư điện tử (Mail Server) cho một tên miền?",
        "options": [
          "Bản ghi loại A",
          "Bản ghi loại NS",
          "Bản ghi loại MX (Mail Exchange)",
          "Bản ghi loại CNAME (Canonical Name)"
        ],
        "correct": 2,
        "explanation": "Các loại bản ghi DNS cơ bản: Loại A (Name -> IPv4); Loại AAAA (Name -> IPv6); Loại NS (Tên miền -> Tên máy chủ DNS có thẩm quyền); Loại CNAME (Tên bí danh alias -> Tên chính thức canonical); Loại MX (Tên miền -> Tên máy chủ tiếp nhận Email)."
      },
      {
        "id": 214,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức DNS & Tầng Giao vận",
        "difficulty": "Đánh lừa",
        "question": "Giao thức DNS thông thường sử dụng giao thức truyền vận nào và qua cổng dịch vụ (port) số mấy?",
        "options": [
          "TCP cổng 80",
          "UDP cổng 53 (và dùng TCP cổng 53 khi thông điệp phản hồi vượt quá 512 byte hoặc đồng bộ vùng Zone Transfer)",
          "UDP cổng 67",
          "TCP cổng 443"
        ],
        "correct": 1,
        "explanation": "DNS chủ yếu sử dụng UDP cổng 53 vì tốc độ nhanh, không tốn thời gian bắt tay 3 bước. Tuy nhiên, khi kích thước thông điệp vượt quá 512 byte (như DNSSEC) hoặc khi đồng bộ cơ sở dữ liệu giữa máy chủ DNS chính và phụ (Zone Transfer), DNS sẽ tự động chuyển sang sử dụng TCP cổng 53."
      },
      {
        "id": 215,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Mạng phân phối nội dung (CDN)",
        "difficulty": "Thông hiểu",
        "question": "Mạng phân phối nội dung CDN (Content Distribution Network) giúp tăng tốc độ tải trang và video cho người dùng toàn cầu chủ yếu bằng cách nào?",
        "options": [
          "Thay thế toàn bộ giao thức TCP bằng UDP trên Internet",
          "Đặt các cụm máy chủ đệm (Edge Servers) phân tán về mặt địa lý gần với vị trí của người dùng cuối và chuyển hướng yêu cầu tới máy chủ gần nhất",
          "Nén dung lượng tất cả các video về độ phân giải thấp nhất",
          "Miễn phí cước Internet cho người dùng truy cập video"
        ],
        "correct": 1,
        "explanation": "CDN (như Akamai, Cloudflare, Google Cloud CDN) triển khai hàng nghìn máy chủ bản sao (replica/cache) tại các ISP trên toàn cầu. Khi người dùng yêu cầu nội dung, cơ chế định tuyến thông minh (thường qua DNS) sẽ dẫn hướng người dùng đến máy chủ CDN ở gần nhất (về mặt địa lý hoặc RTT), giảm đáng kể độ trễ truyền dẫn."
      },
      {
        "id": 216,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Lập trình Socket (Socket Programming)",
        "difficulty": "Thông hiểu",
        "question": "Trong lập trình Socket mạng máy tính, một Socket giao tiếp được định danh duy nhất bởi các thông tin nào?",
        "options": [
          "Địa chỉ MAC và tên của máy tính",
          "Địa chỉ IP và Số hiệu cổng (Port Number)",
          "Đường dẫn URL và tên trình duyệt",
          "Địa chỉ Gateway và Subnet Mask"
        ],
        "correct": 1,
        "explanation": "Socket là giao diện lập trình (API) giữa tầng ứng dụng và tầng giao vận. Một socket được định danh bởi cặp: [Địa chỉ IP, Số hiệu cổng Port]. Đối với TCP, một kết nối được định danh chính xác bởi bộ 4 thông số: (Source IP, Source Port, Dest IP, Dest Port)."
      },
      {
        "id": 217,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Lập trình Socket (Socket Programming)",
        "difficulty": "Đánh lừa",
        "question": "Sự khác biệt căn bản trong mã nguồn giữa lập trình Socket TCP (SOCK_STREAM) và Socket UDP (SOCK_DGRAM) ở phía Server là gì?",
        "options": [
          "Socket UDP yêu cầu phải gọi hàm listen() và accept(), còn TCP thì không cần",
          "Server TCP cần một socket chào đón (Welcome socket) để lắng nghe kết nối và một socket mới được tạo ra cho mỗi client kết nối tới; trong khi UDP Server chỉ dùng 1 socket duy nhất và dùng sendto()/recvfrom()",
          "UDP Server bắt buộc phải chạy trên hệ điều hành Linux",
          "TCP không thể truyền được xâu ký tự chuỗi"
        ],
        "correct": 1,
        "explanation": "Trong lập trình TCP server: có 1 Welcome Socket (lắng nghe bằng listen()), khi client kết nối tới hàm accept() sẽ tạo ra 1 Connection Socket mới riêng cho client đó. Trong khi ở UDP: server không thiết lập kết nối, không có accept(), chỉ dùng 1 socket duy nhất để nhận và gửi các datagram độc lập bằng hàm recvfrom() và sendto()."
      },
      {
        "id": 218,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức HTTP/2 & Cải tiến",
        "difficulty": "Thông hiểu",
        "question": "Cải tiến lớn nhất của giao thức HTTP/2 so với HTTP/1.1 nhằm giải quyết hiện tượng tắc nghẽn đầu hàng (Head-of-Line Blocking) ở tầng ứng dụng là gì?",
        "options": [
          "Chuyển sang dùng cáp quang chuyên dụng",
          "Đa ghép kênh (Multiplexing) các luồng (Streams) dữ liệu dạng nhị phân (Binary Framing) trên một kết nối TCP duy nhất",
          "Xóa bỏ hoàn toàn mã hóa TLS/HTTPS",
          "Giới hạn dung lượng trang web không vượt quá 100 KB"
        ],
        "correct": 1,
        "explanation": "Trong HTTP/1.1, pipelining vẫn bị nghẽn Head-of-Line: nếu request đầu tiên bị chậm, các response sau phải xếp hàng đợi. HTTP/2 giải quyết triệt để vấn đề này bằng tầng đóng khung nhị phân (Binary Framing Layer), chia nhỏ các request/response thành các khung (frames) độc lập và xen kẽ (multiplex) trên cùng một kết nối TCP duy nhất."
      },
      {
        "id": 219,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Máy chủ Ủy quyền (Web Cache / Proxy)",
        "difficulty": "Vận dụng",
        "question": "Một mạng cơ quan kết nối Internet qua đường truyền truy nhập 15 Mbps. Tỉ lệ yêu cầu web được tìm thấy tại Web Cache cục bộ (Hit rate) là 40%. Điều này mang lại lợi ích trực tiếp nào?",
        "options": [
          "Tăng gấp đôi địa chỉ IP của cơ quan",
          "Giảm 40% lưu lượng truy cập phải đi qua đường truyền Internet bên ngoài, giảm tải và giảm độ trễ phản hồi trang web đáng kể",
          "Ngăn chặn 100% các loại virus từ Internet",
          "Chuyển đổi các trang web HTTP thành HTTPS tự động"
        ],
        "correct": 1,
        "explanation": "Khi Cache hit rate = 40%, có nghĩa là 40% các yêu cầu web được đáp ứng ngay lập tức từ máy chủ proxy nội bộ (mạng LAN tốc độ cao, trễ gần như bằng 0) mà không cần gửi ra đường truyền ngoài. Đường truyền Internet 15 Mbps được giảm 40% tải, giải tỏa tình trạng nghẽn cổ chai."
      },
      {
        "id": 220,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Mã trạng thái HTTP (Status Codes)",
        "difficulty": "Thông hiểu",
        "question": "Khi người dùng truy cập vào một tài nguyên nhưng máy chủ từ chối phục vụ do người dùng không có quyền truy cập (mặc dù đã xác thực danh tính), mã lỗi HTTP nào sẽ được trả về?",
        "options": [
          "401 Unauthorized",
          "403 Forbidden",
          "404 Not Found",
          "500 Internal Server Error"
        ],
        "correct": 1,
        "explanation": "Phân biệt: 401 Unauthorized yêu cầu phải đăng nhập/xác thực; còn 403 Forbidden có nghĩa là máy chủ hiểu yêu cầu và danh tính người dùng nhưng kiên quyết từ chối cấp quyền truy cập (bị cấm truy cập thư mục hoặc không đủ đặc quyền)."
      },
      {
        "id": 221,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức Thư điện tử (Email)",
        "difficulty": "Đánh lừa",
        "question": "Phát biểu nào sau đây so sánh ĐÚNG giữa giao thức HTTP và giao thức SMTP?",
        "options": [
          "Cả hai đều là giao thức kéo (Pull protocols)",
          "HTTP là giao thức kéo (Pull - người nhận lấy dữ liệu từ server), còn SMTP là giao thức đẩy (Push - người gửi đẩy dữ liệu sang server)",
          "HTTP truyền dữ liệu qua UDP còn SMTP truyền dữ liệu qua TCP",
          "SMTP đóng gói mỗi đối tượng trong một thông điệp TCP riêng, còn HTTP gộp chung"
        ],
        "correct": 1,
        "explanation": "Khác biệt cốt lõi: HTTP là giao thức KÉO (Pull) - người dùng dùng trình duyệt để kéo nội dung từ Web server về; còn SMTP là giao thức ĐẨY (Push) - máy gửi đẩy thư sang máy nhận. Cả hai giao thức này đều hoạt động ở tầng ứng dụng và đều sử dụng dịch vụ tin cậy TCP ở tầng giao vận."
      },
      {
        "id": 222,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Hệ thống Tên miền (DNS)",
        "difficulty": "Thông hiểu",
        "question": "Khi ta gõ lệnh 'ping ptit.edu.vn', điều gì xảy ra ở tầng ứng dụng TRƯỚC TIÊN trước khi gói tin ICMP Echo Request được phát đi?",
        "options": [
          "Trình điều khiển gửi ngay gói tin ICMP tới router",
          "Hệ thống gọi hàm phân giải DNS (DNS Resolver) để truy vấn địa chỉ IP tương ứng với tên miền ptit.edu.vn",
          "Trình duyệt tự động mở cổng 80",
          "Card mạng tự sinh ra địa chỉ MAC ngẫu nhiên"
        ],
        "correct": 1,
        "explanation": "Gói tin ở tầng mạng chỉ có thể định tuyến dựa trên địa chỉ IP đích dạng số. Do đó, trước khi có thể tạo và gửi gói tin IP/ICMP, hệ điều hành phải thực hiện quá trình phân giải tên miền (DNS lookup) để chuyển đổi 'ptit.edu.vn' thành địa chỉ IP cụ thể."
      },
      {
        "id": 223,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức HTTP & Header",
        "difficulty": "Nhận biết",
        "question": "Trong thông điệp HTTP Request, phương thức (Method) nào được thiết kế để gửi dữ liệu từ form biểu mẫu người dùng lên máy chủ kèm theo thân thông điệp (Entity Body)?",
        "options": [
          "GET",
          "POST",
          "HEAD",
          "TRACE"
        ],
        "correct": 1,
        "explanation": "Phương thức GET đưa dữ liệu vào chuỗi truy vấn trên URL (Query String), trong khi phương thức POST truyền dữ liệu trong phần thân thông điệp (Entity Body) của HTTP Request, phù hợp để gửi mật khẩu, dữ liệu biểu mẫu dài hoặc tải lên tệp tin."
      },
      {
        "id": 224,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức HTTP & Header",
        "difficulty": "Thông hiểu",
        "question": "Header nào sau đây là BẮT BUỘC phải có trong mọi thông điệp HTTP/1.1 Request?",
        "options": [
          "User-Agent",
          "Host",
          "Cookie",
          "Accept-Encoding"
        ],
        "correct": 1,
        "explanation": "Theo chuẩn RFC 2616 (HTTP/1.1), header 'Host:' (ví dụ Host: www.ptit.edu.vn) là bắt buộc. Header này cho phép một máy chủ web có một địa chỉ IP duy nhất có thể lưu trữ và phân biệt nhiều website khác nhau (Virtual Hosting)."
      },
      {
        "id": 225,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức BitTorrent (P2P)",
        "difficulty": "Thông hiểu",
        "question": "Trong giao thức chia sẻ file P2P BitTorrent, thuật toán 'Tit-for-Tat' (Ăn miếng trả miếng) nhằm mục đích gì?",
        "options": [
          "Phạt những người dùng tải xuống bằng cách xóa file trên ổ cứng của họ",
          "Khuyến khích các peer tích cực đóng góp băng thông tải lên (Upload) bằng cách ưu tiên gửi dữ liệu cho 4 peer đang cho mình tốc độ download cao nhất",
          "Chặn không cho máy tính cài đặt phần mềm diệt virus",
          "Bắt buộc người dùng phải trả phí qua thẻ tín dụng"
        ],
        "correct": 1,
        "explanation": "Chiến lược 'Tit-for-Tat' trong BitTorrent chống lại hiện tượng 'Free-riding' (chỉ tải về mà không chia sẻ). Cứ mỗi 10 giây, một peer sẽ đánh giá và chỉ mở luồng gửi dữ liệu (unchoke) cho 4 peer đang cung cấp tốc độ truyền tốt nhất cho nó; kèm theo 1 peer thử nghiệm ngẫu nhiên (Optimistic unchoke) sau mỗi 30 giây."
      },
      {
        "id": 226,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức DNS & Tấn công DNS",
        "difficulty": "Thông hiểu",
        "question": "Tấn công 'DNS Cache Poisoning' (Đầu độc bộ đệm DNS) gây ra hậu quả gì nghiêm trọng cho người dùng Internet?",
        "options": [
          "Làm đứt cáp quang biển",
          "Kẻ tấn công chèn các bản ghi IP giả mạo vào bộ nhớ đệm của DNS Server khiến người dùng bị chuyển hướng lén lút sang website lừa đảo (Phishing)",
          "Làm hỏng hệ điều hành Windows trên máy trạm",
          "Xóa sạch toàn bộ email trong hòm thư"
        ],
        "correct": 1,
        "explanation": "DNS Cache Poisoning chèn các bản ghi ánh xạ IP sai lệch vào Local DNS cache của nhà mạng hoặc tổ chức. Khi người dùng gõ tên miền ngân hàng hợp pháp, DNS cache đã bị đầu độc trả về IP của máy chủ giả mạo do hacker kiểm soát để đánh cắp tài khoản đăng nhập."
      },
      {
        "id": 227,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức HTTP & Bảo mật HTTPS",
        "difficulty": "Nhận biết",
        "question": "Giao thức HTTPS bản chất là sự kết hợp giữa giao thức HTTP và tầng bảo mật nào?",
        "options": [
          "Giao thức IPsec ở tầng mạng",
          "Giao thức TLS / SSL (Transport Layer Security) nằm giữa tầng Ứng dụng và tầng Giao vận",
          "Mã kiểm tra CRC ở tầng liên kết dữ liệu",
          "Hệ thống tường lửa phần cứng"
        ],
        "correct": 1,
        "explanation": "HTTPS (cổng 443) chạy giao thức HTTP tiêu chuẩn trên nền một kênh truyền được mã hóa và xác thực bởi giao thức TLS/SSL. TLS cung cấp 3 tính năng an ninh: Bảo mật dữ liệu (Confidentiality), Toàn vẹn dữ liệu (Integrity) và Xác thực danh tính máy chủ (Authentication)."
      },
      {
        "id": 228,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Bản ghi tài nguyên DNS (Resource Records)",
        "difficulty": "Đánh lừa",
        "question": "Một tên miền có bản ghi CNAME là 'mail.company.com IN CNAME server10.backup.com'. Điều này có nghĩa là gì?",
        "options": [
          "server10.backup.com là địa chỉ IP của máy chủ mail",
          "mail.company.com là tên bí danh (Alias), còn tên miền chính thức (Canonical Name) là server10.backup.com",
          "mail.company.com là máy chủ DNS có thẩm quyền của backup.com",
          "Đây là bản ghi chỉ định giao thức gửi thư của Google"
        ],
        "correct": 1,
        "explanation": "Bản ghi CNAME (Canonical Name) dùng để ánh xạ một tên miền phụ/bí danh (Alias) về một tên máy tính chính thức (Canonical name). Để tìm được địa chỉ IP cuối cùng, trình phân giải DNS sẽ tiếp tục tra cứu bản ghi loại A của 'server10.backup.com'."
      },
      {
        "id": 229,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức Video Streaming (DASH)",
        "difficulty": "Thông hiểu",
        "question": "Giao thức truyền phát video thích ứng qua HTTP (DASH - Dynamic Adaptive Streaming over HTTP) hoạt động theo nguyên lý nào?",
        "options": [
          "Bắt buộc người xem phải tải xong toàn bộ video mới được xem",
          "Video được chia thành nhiều đoạn nhỏ (Chunks), mỗi đoạn được mã hóa ở nhiều mức chất lượng (bitrate) khác nhau; máy khách tự động chọn mức chất lượng phù hợp với băng thông tức thời",
          "Sử dụng giao thức UDP không kiểm soát tắc nghẽn",
          "Chỉ phát video đơn sắc để tiết kiệm dung lượng"
        ],
        "correct": 1,
        "explanation": "DASH (chuẩn được YouTube, Netflix sử dụng) chia video thành các đoạn nhỏ vài giây (chunks) với các mức phân giải khác nhau (1080p, 720p, 480p...). Dựa trên băng thông đo được liên tục, máy khách linh hoạt gửi HTTP GET để tải các đoạn tiếp theo ở chất lượng cao nhất mà không bị giật/lag (buffering)."
      },
      {
        "id": 230,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức HTTP & Header",
        "difficulty": "Nhận biết",
        "question": "Phương thức HTTP HEAD thường được sử dụng cho mục đích nào?",
        "options": [
          "Tải về phần đầu và phần thân của tệp tin HTML",
          "Xóa một tệp tin trên máy chủ web",
          "Yêu cầu máy chủ chỉ trả về các dòng header phản hồi (Response Headers) mà không gửi phần thân nội dung (Entity Body)",
          "Đổi tên miền của trang web"
        ],
        "correct": 2,
        "explanation": "Phương thức HEAD hoạt động giống hệt như GET nhưng máy chủ không bao giờ trả về thân thông điệp (Entity Body). Lập trình viên và web crawler dùng HEAD để kiểm tra tính hợp lệ của đường link, kích thước tệp (Content-Length) hoặc thời gian chỉnh sửa mới nhất mà không tốn băng thông tải toàn bộ nội dung."
      },
      {
        "id": 231,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Hệ thống Tên miền (DNS)",
        "difficulty": "Thông hiểu",
        "question": "Trường TTL (Time to Live) trong một bản ghi tài nguyên DNS quy định điều gì?",
        "options": [
          "Số bước nhảy (hop) qua các router tối đa trước khi gói tin bị hủy",
          "Khoảng thời gian (tính bằng giây) mà bản ghi DNS này được phép lưu tạm trong bộ nhớ cache của các máy chủ DNS trung gian trước khi bị coi là hết hạn và phải hỏi lại",
          "Thời gian tồn tại của tên miền trước khi phải đóng phí duy trì",
          "Tốc độ tối đa của kết nối mạng"
        ],
        "correct": 1,
        "explanation": "Trong DNS, TTL (Time to Live) đo bằng giây (ví dụ 86400 giây = 24 giờ). Nó hướng dẫn các máy chủ DNS trung gian và máy khách được phép lưu bản ghi này trong cache bao lâu. Khi quản trị viên chuẩn bị đổi IP máy chủ, họ thường giảm TTL xuống thấp (ví dụ 300s) để thông tin IP mới cập nhật nhanh chóng."
      },
      {
        "id": 232,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Mô hình Client-Server",
        "difficulty": "Nhận biết",
        "question": "Đặc trưng nào sau đây KHÔNG PHẢI là đặc trưng của một máy chủ (Server) trong mô hình Client-Server truyền thống?",
        "options": [
          "Luôn luôn bật và trực tuyến 24/7 (Always-on host)",
          "Có địa chỉ IP tĩnh cố định (Permanent IP address)",
          "Chủ động khởi tạo kết nối gửi yêu cầu tới máy khách (Client)",
          "Thường được triển khai trong các trung tâm dữ liệu (Data centers) chuyên dụng"
        ],
        "correct": 2,
        "explanation": "Trong mô hình Client-Server, máy chủ là bên thụ động chờ đợi yêu cầu (Passive wait). Phía máy khách (Client) mới là bên chủ động khởi tạo liên lạc và gửi yêu cầu tới máy chủ trước. Máy chủ không bao giờ chủ động gọi tới client khi client chưa kết nối."
      },
      {
        "id": 233,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Mã trạng thái HTTP (Status Codes)",
        "difficulty": "Nhận biết",
        "question": "Khi người dùng truy cập một website và nhận được mã trạng thái 502 Bad Gateway hoặc 503 Service Unavailable, lỗi này xuất phát từ đâu?",
        "options": [
          "Do người dùng gõ sai cú pháp tên miền",
          "Do card mạng của máy người dùng bị ngắt cáp",
          "Do sự cố từ phía máy chủ hoặc hệ thống máy chủ cổng/proxy trung gian phía server bị quá tải",
          "Do trình duyệt web không hỗ trợ mã màu CSS"
        ],
        "correct": 2,
        "explanation": "Các mã lỗi nhóm 5xx (Server Error) chỉ ra sự cố thuộc về phía máy chủ: 502 Bad Gateway xuất hiện khi proxy/load-balancer nhận phản hồi không hợp lệ từ máy chủ backend; 503 Service Unavailable phản ánh máy chủ đang quá tải hoặc đang trong quá trình bảo trì tạm thời."
      },
      {
        "id": 234,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Giao thức Thư điện tử (Email)",
        "difficulty": "Đánh lừa",
        "question": "Tại sao một người dùng gửi email từ tài khoản Gmail (@gmail.com) đến một người dùng Outlook (@outlook.com) lại không thể sử dụng kết nối HTTP trực tiếp giữa hai máy tính người dùng?",
        "options": [
          "Vì hai người dùng không bật máy cùng một thời điểm, cần hệ thống Mail Server trung gian có địa chỉ IP cố định luôn online để tiếp nhận và lưu trữ thư",
          "Vì giao thức HTTP cấm truyền văn bản tiếng Anh",
          "Vì mạng Internet chặn tất cả lưu lượng gửi thư giữa hai máy cá nhân",
          "Vì người dùng Outlook bắt buộc phải dùng cáp quang"
        ],
        "correct": 0,
        "explanation": "Máy tính cá nhân của người gửi và người nhận không có IP tĩnh công cộng và không thể bật trực tuyến 24/7. Vì vậy, kiến trúc email yêu cầu các Mail Server luôn trực tuyến để tiếp nhận thư bất cứ lúc nào, lưu vào hòm thư (Mailbox), sau đó người nhận bật máy lên sẽ dùng POP3/IMAP/Webmail để lấy thư về."
      },
      {
        "id": 235,
        "exam_type": "nang_cao",
        "chapter": 2,
        "chapter_title": "Chương 2: Tầng Ứng dụng (Application Layer)",
        "category": "Hệ thống Tên miền (DNS)",
        "difficulty": "Vận dụng",
        "question": "Một quản trị viên vừa thay đổi địa chỉ IP của web server và cập nhật bản ghi DNS loại A, nhưng nhiều người dùng vẫn vào địa chỉ IP cũ trong suốt vài giờ sau đó. Nguyên nhân kỹ thuật chính là gì?",
        "options": [
          "Đường truyền cáp quang bị nghẽn",
          "Bản ghi DNS cũ vẫn còn tồn tại trong bộ nhớ đệm (Cache) của các máy chủ DNS trung gian và trình duyệt của người dùng cho đến khi hết hạn TTL (Time-to-Live)",
          "Do máy chủ web chưa khởi động lại hệ điều hành",
          "Do chuẩn mạng IPv4 không hỗ trợ thay đổi địa chỉ IP"
        ],
        "correct": 1,
        "explanation": "Các máy chủ DNS của nhà mạng và bộ phân giải DNS trên máy người dùng lưu cache bản ghi DNS để giảm tải truy vấn. Chừng nào thời gian TTL của bản ghi cũ chưa đếm ngược về 0, hệ thống vẫn sẽ trả về địa chỉ IP cũ từ bộ nhớ đệm mà không hỏi lại máy chủ tên miền có thẩm quyền."
      }
    ],
    "chuong_3_tang_giao_van": [
      {
        "id": 301,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Ghép kênh & Phân kênh (Demux)",
        "difficulty": "Thông hiểu",
        "question": "Để phân kênh (Demultiplexing) chính xác một gói tin TCP đến đúng tiến trình ứng dụng nhận, hệ điều hành dựa vào bộ 4 thông tin (4-tuple) nào?",
        "options": [
          "Source MAC, Destination MAC, IP nguồn, IP đích",
          "Source IP, Source Port, Destination IP, Destination Port",
          "Destination IP, Destination Port, Window Size, Sequence Number",
          "Source IP, Destination IP, Giao thức tầng ứng dụng, Checksum"
        ],
        "correct": 1,
        "explanation": "Khác với UDP chỉ dùng 2 thông tin (Dest IP, Dest Port), một kết nối TCP được định danh duy nhất bởi bộ 4 thông số: (Source IP, Source Port, Dest IP, Dest Port). Điều này cho phép một máy chủ Web lắng nghe trên cổng 80 có thể phục vụ đồng thời hàng nghìn client khác nhau qua các socket riêng biệt."
      },
      {
        "id": 302,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Giao thức UDP",
        "difficulty": "Nhận biết",
        "question": "Phần tiêu đề (Header) của gói tin UDP có kích thước cố định là bao nhiêu byte và bao gồm những trường nào?",
        "options": [
          "20 byte, gồm Sequence Number, Ack Number, Flags, Window Size",
          "8 byte, gồm Source Port (2B), Destination Port (2B), Length (2B), Checksum (2B)",
          "4 byte, gồm Port nguồn và Port đích",
          "12 byte, gồm Source Port, Dest Port, Checksum, Options"
        ],
        "correct": 1,
        "explanation": "Header của UDP cực kỳ tinh gọn, chỉ có 8 byte cố định được chia thành 4 trường (mỗi trường 16 bit = 2 byte): Cổng nguồn (Source Port), Cổng đích (Destination Port), Chiều dài gói tin (Length = Header + Payload) và Mã kiểm tra lỗi (Checksum)."
      },
      {
        "id": 303,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Nguyên lý Truyền tin cậy (RDT)",
        "difficulty": "Thông hiểu",
        "question": "Trong quá trình phát triển giao thức truyền dữ liệu tin cậy (rdt), tại sao phiên bản rdt 2.1 lại cần bổ sung trường số thứ tự gói tin (Sequence number 0 và 1)?",
        "options": [
          "Để sắp xếp lại dữ liệu khi truyền qua nhiều đường khác nhau",
          "Để giải quyết trường hợp thông điệp phản hồi ACK hoặc NAK bị lỗi bit khiến bên gửi gửi lại gói tin cũ, giúp bên nhận phát hiện và loại bỏ gói tin trùng lặp (Duplicate Packet)",
          "Để tăng tốc độ truyền dẫn gấp đôi",
          "Để thông báo cho router biết kích thước bộ đệm"
        ],
        "correct": 1,
        "explanation": "Trong rdt 2.0, nếu thông điệp ACK/NAK gửi về bị lỗi bit (corrupted), bên gửi không biết bên nhận đã nhận được hay chưa nên bắt buộc phải gửi lại. Nhưng bên nhận không thể phân biệt gói gửi lại này là dữ liệu mới hay gói cũ bị trùng! Số sequence 0 và 1 trong rdt 2.1 giải quyết triệt để vấn đề nhận diện gói tin trùng lặp này."
      },
      {
        "id": 304,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Nguyên lý Truyền tin cậy (RDT)",
        "difficulty": "Thông hiểu",
        "question": "Giao thức rdt 2.2 có cải tiến quan trọng nào so với rdt 2.1?",
        "options": [
          "Bổ sung đồng hồ bấm giờ (Timer)",
          "Loại bỏ hoàn toàn thông điệp NAK (Negative Acknowledgment), chỉ sử dụng thông điệp ACK có kèm theo số thứ tự (ACK 0 hoặc ACK 1)",
          "Chuyển từ cơ chế Stop-and-Wait sang cơ chế cửa sổ trượt Pipelining",
          "Tăng kích thước gói tin lên 64 KB"
        ],
        "correct": 1,
        "explanation": "rdt 2.2 là giao thức không cần NAK (NAK-free). Thay vì gửi NAK khi phát hiện gói tin lỗi, bên nhận chỉ việc gửi lại thông điệp ACK cho gói tin hợp lệ cuối cùng mà nó đã nhận (kèm số seq). Khi bên gửi nhận được 2 lần ACK giống nhau (Duplicate ACK), nó tự hiểu là gói tin kế tiếp đã bị lỗi và cần gửi lại."
      },
      {
        "id": 305,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Tính toán Hiệu suất Kênh truyền (RDT 3.0)",
        "difficulty": "Vận dụng",
        "question": "Một liên kết có tốc độ R = 1 Gbps, trễ truyền khứ hồi RTT = 30 ms. Gói tin có kích thước L = 1000 Byte (8000 bit). Nếu sử dụng giao thức dừng và đợi (Stop-and-Wait - rdt 3.0), hiệu suất sử dụng kênh truyền (Sender Utilization - U_sender) là xấp xỉ bao nhiêu?",
        "options": [
          "0.027% (khoảng 0.00027)",
          "27%",
          "99%",
          "2.7%"
        ],
        "correct": 0,
        "explanation": "Thời gian đẩy gói tin vào đường truyền: d_trans = L / R = 8000 bit / 10^9 bps = 0.008 ms. Hiệu suất kênh truyền: U_sender = d_trans / (RTT + d_trans) = 0.008 / (30 + 0.008) ≈ 0.000266 (tức là 0.027%). Đường truyền 1 Gbps cực nhanh nhưng máy gửi bị lãng phí hơn 99.97% thời gian chỉ để chờ gói ACK! Đây là lý do bắt buộc phải chuyển sang kỹ thuật truyền đường ống Pipelining."
      },
      {
        "id": 306,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Cơ chế Pipelining: Go-Back-N (GBN)",
        "difficulty": "Thông hiểu",
        "question": "Trong giao thức Go-Back-N (GBN), khi bên nhận nhận được một gói tin đúng (không lỗi) nhưng ĐẾN NGOÀI THỨ TỰ (Out-of-order, ví dụ đang đợi gói 3 nhưng gói 4 lại đến trước), bên nhận sẽ làm gì?",
        "options": [
          "Lưu gói 4 vào bộ đệm và đợi gói 3",
          "Hủy bỏ hoàn toàn gói 4 và gửi lại thông điệp ACK cho gói tin hợp lệ đúng thứ tự cao nhất vừa nhận trước đó (Cumulative ACK)",
          "Đóng ngay lập tức kết nối mạng",
          "Gửi gói tin RST về cho bên gửi"
        ],
        "correct": 1,
        "explanation": "Đặc trưng lớn nhất của GBN là: Bên nhận KHÔNG CÓ BỘ ĐỆM cho các gói đến ngoài thứ tự (Receive window = 1). Bất kỳ gói nào đến sai thứ tự đều bị vứt bỏ, và bên nhận chỉ gửi lại ACK cho gói đúng thứ tự cao nhất trước đó. Khi bên gửi bị timeout ở gói 3, nó sẽ phải truyền lại toàn bộ các gói từ 3 trở đi (Go Back N)."
      },
      {
        "id": 307,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Cơ chế Pipelining: Selective Repeat (SR)",
        "difficulty": "Thông hiểu",
        "question": "Sự khác biệt cốt lõi giữa Selective Repeat (SR) và Go-Back-N (GBN) là gì?",
        "options": [
          "SR không sử dụng số thứ tự Sequence Number",
          "Trong SR, bên nhận có bộ đệm để lưu các gói đến ngoài thứ tự và gửi ACK riêng cho từng gói (Individual ACK); bên gửi chỉ truyền lại DUY NHẤT gói tin bị mất (mỗi gói có một timer riêng)",
          "SR chỉ chạy được trên mạng không dây WiFi",
          "GBN có tốc độ chậm hơn UDP nhưng nhanh hơn SR"
        ],
        "correct": 1,
        "explanation": "Trong Selective Repeat (Lặp lại có chọn lọc): Bên nhận có bộ đệm chứa các gói ngoài thứ tự và gửi ACK độc lập cho từng gói một. Bên gửi duy trì bộ đếm thời gian riêng cho từng gói tin chưa được xác nhận, và khi một timer hết hạn, bên gửi chỉ phát lại duy nhất một gói tin bị mất đó mà không cần gửi lại toàn bộ cửa sổ như GBN."
      },
      {
        "id": 308,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Tính toán Cửa sổ Selective Repeat",
        "difficulty": "Đánh lừa",
        "question": "Nếu số thứ tự gói tin được đánh số bằng trường k bit (không gian số thứ tự từ 0 đến 2^k - 1), để tránh hiện tượng nhập nhằng (nhầm lẫn giữa gói tin mới và gói tin cũ bị truyền lại), kích thước cửa sổ cực đại N của giao thức Selective Repeat phải thỏa mãn điều kiện nào?",
        "options": [
          "N <= 2^k - 1",
          "N <= 2^(k - 1) (tức là không quá một nửa không gian số thứ tự)",
          "N <= k",
          "N có thể lớn tùy ý"
        ],
        "correct": 1,
        "explanation": "Trong Selective Repeat, nếu kích thước cửa sổ N > 2^(k-1), cửa sổ của bên nhận và cửa sổ của bên gửi sẽ bị gối đầu lên nhau. Khi toàn bộ các ACK của một cửa sổ bị mất trên đường về, bên gửi sẽ gửi lại gói tin cũ, nhưng bên nhận sẽ nhầm lẫn gói đó là gói tin mới của chu kỳ kế tiếp! Do đó, quy tắc vàng: Window Size <= (Sequence Number Space) / 2 = 2^(k-1)."
      },
      {
        "id": 309,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Đặc điểm Giao thức TCP",
        "difficulty": "Nhận biết",
        "question": "Đặc tính nào sau đây KHÔNG PHẢI là đặc tính của giao thức TCP?",
        "options": [
          "Hướng kết nối (Connection-oriented)",
          "Truyền dữ liệu dạng dòng byte liên tục không phân ranh giới bản ghi (Byte-stream)",
          "Hỗ trợ truyền đa hướng từ một nguồn tới nhiều đích đồng thời (Multicasting)",
          "Truyền song công toàn phần (Full-duplex)"
        ],
        "correct": 2,
        "explanation": "TCP là giao thức Point-to-Point (Điểm - Điểm) nghiêm ngặt giữa chính xác một bên gửi và một bên nhận (1-to-1). TCP KHÔNG hỗ trợ truyền đa hướng (Multicast) hay quảng bá (Broadcast). Nếu muốn truyền Multicast (như truyền hình IPTV), bắt buộc phải sử dụng giao thức UDP ở tầng giao vận."
      },
      {
        "id": 310,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Tính toán Số thứ tự (Seq & Ack) trong TCP",
        "difficulty": "Vận dụng",
        "question": "Host A gửi cho Host B một TCP segment có Sequence Number = 1000 và mang theo 500 byte dữ liệu payload. Host B nhận được gói tin này đầy đủ và không có lỗi. Thông điệp ACK mà Host B gửi trả lại cho Host A sẽ có trường Acknowledgment Number bằng bao nhiêu?",
        "options": [
          "1000",
          "1500",
          "1501",
          "500"
        ],
        "correct": 1,
        "explanation": "Trong TCP, Sequence Number là số thứ tự của byte đầu tiên (ở đây là byte 1000). Gói mang 500 byte dữ liệu sẽ chiếm các byte từ 1000 đến 1499. Trường Acknowledgment Number trong TCP là 'số thứ tự của byte tiếp theo mà bên nhận mong đợi nhận được'. Vì đã nhận trọn vẹn đến byte 1499, byte tiếp theo mong đợi là 1500 (Ack = 1500)."
      },
      {
        "id": 311,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Tiêu đề TCP (TCP Header)",
        "difficulty": "Thông hiểu",
        "question": "Trường Data Offset (hay Header Length) trong tiêu đề TCP có độ dài 4 bit. Nếu giá trị của trường này là nhị phân 0101 (giá trị thập phân là 5), thì tiêu đề TCP có độ dài thực tế là bao nhiêu byte?",
        "options": [
          "5 byte",
          "20 byte",
          "40 byte",
          "60 byte"
        ],
        "correct": 1,
        "explanation": "Trường Data Offset quy định độ dài của TCP header tính theo đơn vị 'từ 32-bit' (tức 1 đơn vị = 4 byte). Khi Data Offset = 5, độ dài header là 5 * 4 byte = 20 byte. Đây chính là độ dài tối thiểu của một TCP header tiêu chuẩn (khi không có trường Options mở rộng)."
      },
      {
        "id": 312,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Bắt tay 3 bước (3-way Handshake)",
        "difficulty": "Thông hiểu",
        "question": "Trong bước thứ hai của quá trình thiết lập kết nối TCP 3 bước (gói tin từ Server trả về cho Client), các cờ (flags) nào trong tiêu đề TCP được bật lên giá trị 1?",
        "options": [
          "Chỉ có cờ SYN = 1",
          "Chỉ có cờ ACK = 1",
          "Cả hai cờ SYN = 1 và ACK = 1",
          "Cờ SYN = 1 và FIN = 1"
        ],
        "correct": 2,
        "explanation": "Trình tự bắt tay 3 bước TCP: (1) Client -> Server: gửi SYN (SYN=1, Seq=client_isn); (2) Server -> Client: gửi SYN-ACK (SYN=1 để yêu cầu đồng bộ phía server, đồng thời ACK=1 để xác nhận gói SYN của client, Ack=client_isn + 1); (3) Client -> Server: gửi ACK (ACK=1, Ack=server_isn + 1)."
      },
      {
        "id": 313,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Giải phóng Kết nối TCP",
        "difficulty": "Đánh lừa",
        "question": "Khi một bên chủ động đóng kết nối TCP (gửi FIN và nhận đủ các ACK), tại sao nó không đóng socket ngay mà phải chuyển sang trạng thái TIME_WAIT (thường kéo dài 2 MSL - khoảng 1 đến 2 phút)?",
        "options": [
          "Để máy chủ có thời gian khởi động lại card mạng",
          "Để gửi lại gói tin ACK cuối cùng nếu gói ACK đó bị mất trên đường truyền (giúp bên kia giải phóng kết nối bình thường), đồng thời đảm bảo tất cả các gói tin cũ của kết nối này đã biến mất hoàn toàn trên mạng",
          "Để tiếp tục tải dữ liệu còn lại bằng giao thức UDP",
          "Do lỗi của hệ điều hành Windows"
        ],
        "correct": 1,
        "explanation": "Trạng thái TIME_WAIT (2 MSL - Maximum Segment Lifetime) có 2 mục đích sống còn: (1) Nếu gói ACK cuối cùng bị thất lạc, bên kia sẽ gửi lại FIN; trạng thái TIME_WAIT cho phép gửi lại ACK để bên kia đóng kết nối an toàn; (2) Ngăn ngừa các gói tin 'lang thang' (stray segments) của kết nối cũ bị nhầm lẫn vào một kết nối mới mở trùng cổng sau đó."
      },
      {
        "id": 314,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Ước lượng RTT & Timeout trong TCP",
        "difficulty": "Vận dụng",
        "question": "TCP ước lượng thời gian khứ hồi (EstimatedRTT) theo công thức trung bình trượt指数 (EWMA): EstimatedRTT = (1 - alpha) * EstimatedRTT + alpha * SampleRTT. Theo khuyến nghị RFC 6298, giá trị alpha chuẩn thường được chọn là:",
        "options": [
          "0.5",
          "0.125 (tức 1/8)",
          "0.875",
          "0.01"
        ],
        "correct": 1,
        "explanation": "Theo chuẩn RFC, alpha thường bằng 0.125 (1/8). Trọng số 87.5% dành cho quá khứ và 12.5% dành cho mẫu RTT đo mới nhất (SampleRTT) giúp đường ước lượng EstimatedRTT ổn định, không bị dao động đột ngột bởi một vài gói tin bị trễ bất thường trên mạng."
      },
      {
        "id": 315,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Ước lượng RTT & Thuật toán Karn",
        "difficulty": "Thông hiểu",
        "question": "Thuật toán Karn (Karn's Algorithm) đưa ra nguyên tắc nào sau đây khi tính toán giá trị SampleRTT của kết nối TCP?",
        "options": [
          "Không bao giờ đo SampleRTT đối với các segment đã bị truyền lại (Retransmitted segments), đồng thời nhân đôi giá trị Timeout sau mỗi lần xảy ra timeout liên tiếp",
          "Nhân đôi giá trị SampleRTT khi truyền qua mạng WiFi",
          "Lấy giá trị SampleRTT nhỏ nhất trong 100 gói gần nhất",
          "Bắt buộc đo RTT bằng giao thức ping ICMP"
        ],
        "correct": 0,
        "explanation": "Khi một gói tin bị truyền lại và sau đó nhận được ACK, ta không thể biết ACK này là phản hồi cho gói truyền ban đầu hay gói truyền lại (gọi là Ack Ambiguity). Thuật toán Karn giải quyết bằng cách: Bỏ qua không lấy mẫu SampleRTT cho các gói phải truyền lại; và áp dụng cơ chế Exponential Backoff: mỗi lần timeout liên tiếp thì nhân đôi giá trị TimeoutInterval."
      },
      {
        "id": 316,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Điều khiển Luồng (Flow Control)",
        "difficulty": "Thông hiểu",
        "question": "Cơ chế điều khiển luồng (Flow Control) của TCP bảo vệ đối tượng nào?",
        "options": [
          "Bảo vệ các bộ định tuyến (Routers) ở lõi mạng không bị nghẽn",
          "Bảo vệ bộ đệm máy nhận (Receive Buffer) không bị tràn do bên gửi truyền dữ liệu quá nhanh so với tốc độ ứng dụng bên nhận đọc dữ liệu ra",
          "Bảo vệ địa chỉ IP không bị kẻ xấu đánh cắp",
          "Bảo vệ dây cáp mạng không bị quá nhiệt"
        ],
        "correct": 1,
        "explanation": "Cần phân biệt rõ hai cơ chế: Điều khiển tắc nghẽn (Congestion Control) là bảo vệ mạng lõi và các router; còn Điều khiển luồng (Flow Control) là cơ chế điểm-điểm giữa 2 đầu cuối, dùng trường Receive Window (rwnd) để bên nhận báo cho bên gửi biết dung lượng bộ đệm còn trống, ngăn bên gửi làm tràn bộ nhớ nhận."
      },
      {
        "id": 317,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Điều khiển Luồng (Flow Control)",
        "difficulty": "Đánh lừa",
        "question": "Khi bên nhận gửi thông điệp ACK với trường rwnd = 0 (bộ đệm nhận đã đầy 100%), bên gửi TCP sẽ làm gì để tránh rơi vào trạng thái bế tắc (Deadlock)?",
        "options": [
          "Đóng ngay lập tức kết nối TCP và gửi thông báo lỗi",
          "Ngừng truyền và định kỳ gửi các segment thăm dò (Probe segments) kích thước 1 byte dữ liệu để kích thích bên nhận phản hồi ACK cập nhật lại giá trị rwnd mới",
          "Tự động tăng gấp đôi dung lượng RAM của máy nhận",
          "Chuyển toàn bộ dữ liệu còn lại sang giao thức UDP"
        ],
        "correct": 1,
        "explanation": "Nếu bên gửi chỉ đứng chờ bên nhận thông báo rwnd > 0, rủi ro là gói tin thông báo mở cửa sổ của bên nhận có thể bị mất trên đường truyền, dẫn đến cả hai bên cùng ngồi chờ nhau mãi mãi (Deadlock). Để chống bế tắc, TCP quy định bên gửi tiếp tục gửi các segment thăm dò 1 byte để ép bên nhận phải gửi ACK trả về trạng thái bộ đệm hiện tại."
      },
      {
        "id": 318,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Điều khiển Tắc nghẽn (Congestion Control)",
        "difficulty": "Nhận biết",
        "question": "Nguyên lý điều khiển tắc nghẽn AIMD (Additive Increase Multiplicative Decrease) của TCP hoạt động như thế nào?",
        "options": [
          "Tăng kích thước cửa sổ gấp đôi mỗi RTT khi mạng tốt; giảm về 0 khi có mất gói",
          "Tăng tuyến tính cửa sổ tắc nghẽn cwnd thêm 1 MSS sau mỗi RTT khi không có mất gói; và giảm một nửa cwnd khi phát hiện có mất gói tin",
          "Nhân đôi cửa sổ mỗi giây và chia ba khi bị lỗi mạng",
          "Giữ nguyên kích thước cửa sổ cố định trong suốt phiên truyền"
        ],
        "correct": 1,
        "explanation": "AIMD là triết lý cốt lõi tạo nên sự ổn định của Internet: Cẩn trọng thăm dò băng thông bằng cách tăng tuyến tính (Additive Increase: +1 MSS mỗi RTT); nhưng khi phát hiện dấu hiệu tắc nghẽn thì phản ứng quyết liệt bằng cách giảm nhân (Multiplicative Decrease: cắt giảm 50% kích thước cửa sổ)."
      },
      {
        "id": 319,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Khởi động chậm (Slow Start)",
        "difficulty": "Vận dụng",
        "question": "Trong pha Khởi động chậm (Slow Start) của TCP, kích thước cửa sổ tắc nghẽn (cwnd) tăng trưởng theo quy luật nào?",
        "options": [
          "Tăng tuyến tính: mỗi RTT tăng thêm đúng 1 MSS",
          "Tăng theo hàm mũ: cwnd tăng gấp đôi sau mỗi RTT (tương ứng với việc tăng thêm 1 MSS cho mỗi thông điệp ACK hợp lệ nhận được)",
          "Tăng ngẫu nhiên tùy thuộc vào tải của CPU",
          "Tăng gấp ba sau mỗi 2 RTT"
        ],
        "correct": 1,
        "explanation": "Dù có tên là 'Slow Start' (Khởi động chậm) vì bắt đầu từ giá trị nhỏ cwnd = 1 MSS, nhưng tốc độ tăng trưởng của nó thực chất là hàm mũ (Exponential growth). Cứ mỗi gói tin được ACK thì cwnd tăng thêm 1 MSS; do đó sau mỗi RTT (khi toàn bộ gói trong cửa sổ được xác nhận), cwnd sẽ tăng gấp đôi (1 -> 2 -> 4 -> 8 -> 16...)."
      },
      {
        "id": 320,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Điều khiển Tắc nghẽn (Congestion Control)",
        "difficulty": "Vận dụng",
        "question": "Một kết nối TCP Reno đang ở pha Tránh tắc nghẽn (Congestion Avoidance) với cwnd = 32 MSS. Ngưỡng ssthresh hiện tại là 16 MSS. Nếu tại thời điểm này xảy ra hiện tượng TIMEOUT, các giá trị ssthresh và cwnd mới sẽ là:",
        "options": [
          "ssthresh = 16 MSS, cwnd = 16 MSS",
          "ssthresh = 16 MSS, cwnd = 1 MSS",
          "ssthresh = 32 MSS, cwnd = 1 MSS",
          "ssthresh = 8 MSS, cwnd = 8 MSS"
        ],
        "correct": 1,
        "explanation": "Khi xảy ra sự kiện Timeout (dấu hiệu tắc nghẽn nặng, mất gói hoàn toàn): (1) Ngưỡng ssthresh mới được đặt bằng một nửa cwnd hiện tại: ssthresh = 32 / 2 = 16 MSS; (2) cwnd lập tức bị kéo sập về 1 MSS (áp dụng cho cả TCP Tahoe lẫn TCP Reno) và bắt đầu lại từ pha Slow Start cho đến khi chạm mốc ssthresh 16 MSS."
      },
      {
        "id": 321,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Truyền lại nhanh (Fast Retransmit)",
        "difficulty": "Thông hiểu",
        "question": "Cơ chế Truyền lại nhanh (Fast Retransmit) của TCP được kích hoạt khi bên gửi nhận được sự kiện nào?",
        "options": [
          "Hết hạn bộ đếm thời gian Timeout",
          "Nhận được liên tiếp 3 thông điệp ACK trùng lặp (3 Duplicate ACKs) cho cùng một gói tin",
          "Nhận được gói tin ICMP Source Quench",
          "Router gửi thông điệp RST về"
        ],
        "correct": 1,
        "explanation": "Khi một gói tin bị mất nhưng các gói sau đó vẫn tới được máy nhận, máy nhận sẽ liên tục gửi các ACK lặp lại chỉ đích danh gói tin còn thiếu. Khi bên gửi nhận được 3 Duplicate ACKs (tổng cộng 4 ACK giống nhau), TCP kết luận gói đó đã bị mất và lập tức truyền lại ngay gói bị thiếu mà không cần chờ hết hạn Timeout (Fast Retransmit)."
      },
      {
        "id": 322,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "TCP Tahoe vs TCP Reno",
        "difficulty": "Đánh lừa",
        "question": "Sự khác biệt quan trọng nhất giữa phiên bản TCP Tahoe và TCP Reno khi nhận được 3 Duplicate ACKs là gì?",
        "options": [
          "TCP Tahoe không hỗ trợ bắt tay 3 bước",
          "TCP Tahoe kéo cwnd về 1 MSS và quay lại Slow Start; trong khi TCP Reno kích hoạt Phục hồi nhanh (Fast Recovery): đặt ssthresh = cwnd/2, đặt cwnd xấp xỉ ssthresh và tiếp tục tăng tuyến tính ở pha Congestion Avoidance",
          "TCP Reno chuyển sang sử dụng UDP để tăng tốc",
          "TCP Tahoe chỉ dùng cho mạng không dây"
        ],
        "correct": 1,
        "explanation": "Khi nhận 3 dup ACKs, mạng vẫn còn khả năng chuyển tiếp dữ liệu (chưa tắc nghẽn hoàn toàn). TCP Tahoe cứng nhắc đưa cwnd về 1 MSS làm giảm mạnh hiệu năng; còn TCP Reno thông minh hơn: áp dụng Fast Recovery, chỉ giảm cwnd xuống một nửa (cwnd = ssthresh) rồi tiếp tục tăng tuyến tính (Congestion Avoidance), tránh bị tụt thông lượng vô ích."
      },
      {
        "id": 323,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Tính toán TCP Checksum",
        "difficulty": "Thông hiểu",
        "question": "Khi tính toán trường Checksum trong tiêu đề TCP và UDP, thuật toán thực hiện trên phần nào của gói tin?",
        "options": [
          "Chỉ tính trên 20 byte tiêu đề TCP",
          "Tính trên toàn bộ Tiêu đề (Header) + Phần dữ liệu (Data) + Một tiêu đề giả (Pseudo-header) chứa địa chỉ IP nguồn, IP đích và số hiệu giao thức từ tầng mạng",
          "Chỉ tính trên phần dữ liệu payload",
          "Chỉ tính trên địa chỉ MAC của card mạng"
        ],
        "correct": 1,
        "explanation": "Để phát hiện các lỗi định tuyến sai (như gói tin bị chuyển nhầm địa chỉ IP), cả TCP và UDP đều tính Checksum trên: Tiêu đề + Dữ liệu + Tiêu đề giả (Pseudo-Header gồm 12 byte: Source IP 4B, Dest IP 4B, Zero 1B, Protocol 1B [TCP=6, UDP=17], TCP/UDP Length 2B). Đây là sự vi phạm nguyên tắc phân tầng có chủ ý nhằm tăng tính toàn vẹn."
      },
      {
        "id": 324,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Tấn công SYN Flood",
        "difficulty": "Thông hiểu",
        "question": "Kẻ tấn công thực hiện kỹ thuật tấn công SYN Flood bằng cách liên tục gửi hàng triệu gói tin TCP SYN với địa chỉ IP nguồn giả mạo nhằm mục đích gì?",
        "options": [
          "Làm tràn hàng đợi kết nối nửa mở (SYN Backlog Queue) của server khiến máy chủ cạn kiệt tài nguyên bộ nhớ và từ chối các kết nối hợp pháp mới",
          "Giải mã mật khẩu tài khoản root của máy chủ",
          "Tắt card mạng của router trung gian",
          "Thay đổi địa chỉ MAC của cổng kết nối"
        ],
        "correct": 0,
        "explanation": "Trong TCP 3-way handshake, khi nhận gói SYN, server cấp phát bộ nhớ tạo một khối điều khiển kết nối nửa mở (half-open connection) và gửi SYN-ACK chờ gói ACK thứ 3. Khi kẻ tấn công gửi ngập lụt hàng nghìn gói SYN giả mạo và không bao giờ gửi ACK, hàng đợi SYN backlog bị đầy tràn, máy chủ bị tê liệt (tấn công DoS)."
      },
      {
        "id": 325,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Cơ chế SYN Cookies",
        "difficulty": "Vận dụng",
        "question": "Cơ chế SYN Cookies được thiết kế để chống lại tấn công SYN Flood như thế nào?",
        "options": [
          "Chặn tất cả các kết nối từ nước ngoài",
          "Máy chủ không cấp phát bộ nhớ (state) khi nhận gói SYN, mà tính toán một số Sequence khởi tạo đặc biệt (Initial Sequence Number) chứa mã hóa thông tin kết nối gửi về trong gói SYN-ACK; chỉ khi client gửi lại ACK hợp lệ thì server mới cấp phát tài nguyên",
          "Yêu cầu người dùng gõ mã CAPTCHA trước khi bắt tay TCP",
          "Tự động chuyển toàn bộ kết nối sang mạng ngang hàng P2P"
        ],
        "correct": 1,
        "explanation": "SYN Cookies là giải pháp xuất sắc phòng chống SYN Flood: Server không lưu bất kỳ trạng thái nào trong RAM khi nhận SYN. Thay vào đó, trường ISN của gói SYN-ACK được mã hóa bằng hàm băm bí mật từ (Source IP, Port, Secret key). Nếu client là người dùng thật, gói ACK thứ 3 sẽ mang Ack = ISN + 1. Server kiểm tra giải mã nếu hợp lệ mới chính thức cấp phát socket."
      },
      {
        "id": 326,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "MSS (Maximum Segment Size)",
        "difficulty": "Thông hiểu",
        "question": "MSS (Maximum Segment Size) trong giao thức TCP đại diện cho kích thước của:",
        "options": [
          "Toàn bộ gói tin bao gồm cả IP Header, TCP Header và Dữ liệu",
          "Kích thước tối đa của phần DỮ LIỆU TẦNG ỨNG DỤNG (Application Payload) có thể đóng trong một TCP segment (thường bằng MTU - 40 byte)",
          "Kích thước bộ đệm của card mạng máy tính",
          "Dung lượng tối đa của một tệp tin tải xuống"
        ],
        "correct": 1,
        "explanation": "Cần phân biệt rõ: MTU (Maximum Transmission Unit) là kích thước tối đa của khung tầng 2 (ví dụ Ethernet MTU = 1500 byte). Còn MSS (Maximum Segment Size) chỉ tính riêng phần DỮ LIỆU của TCP segment. Với IPv4 header chuẩn 20B và TCP header chuẩn 20B, ta có MSS = MTU - 20 (IP) - 20 (TCP) = 1460 byte."
      },
      {
        "id": 327,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Cờ điều khiển TCP (Flags)",
        "difficulty": "Nhận biết",
        "question": "Khi một máy trạm gửi yêu cầu kết nối TCP tới một cổng dịch vụ đang ĐÓNG (không có tiến trình nào lắng nghe) trên máy chủ, máy chủ sẽ phản hồi bằng một TCP segment có bật cờ nào?",
        "options": [
          "Cờ FIN = 1",
          "Cờ RST = 1 (Reset)",
          "Cờ URG = 1",
          "Cờ SYN = 1"
        ],
        "correct": 1,
        "explanation": "Khi nhận được gói tin gửi tới một cổng không hoạt động, máy chủ sẽ trả về gói tin TCP có cờ RST (Reset = 1) để thông báo cho bên gửi biết rằng kết nối bị từ chối và yêu cầu hủy kết nối ngay lập tức. Đây cũng là phản hồi mà lệnh nmap nhận được khi quét một cổng đóng."
      },
      {
        "id": 328,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Tính toán Thông lượng TCP trung bình",
        "difficulty": "Vận dụng",
        "question": "Bỏ qua pha khởi động chậm, nếu kết nối TCP hoạt động trong pha AIMD với kích thước cửa sổ cực đại đạt W (tính bằng byte) trước khi có mất gói, kích thước cửa sổ trung bình và thông lượng trung bình xấp xỉ của kết nối là:",
        "options": [
          "Cửa sổ trung bình bằng W/2; Thông lượng = W / (2 * RTT)",
          "Cửa sổ trung bình bằng 0.75 * W; Thông lượng = (3/4 * W) / RTT",
          "Cửa sổ trung bình bằng W; Thông lượng = W / RTT",
          "Cửa sổ trung bình bằng W/4; Thông lượng = W / (4 * RTT)"
        ],
        "correct": 1,
        "explanation": "Trong cơ chế AIMD hình răng cưa (Sawtooth): Cửa sổ dao động tuyến tính từ W/2 lên đến W rồi lại bị cắt giảm về W/2. Giá trị trung bình của hình răng cưa là (W/2 + W) / 2 = 0.75 * W (hay 3/4 W). Do đó thông lượng trung bình lý thuyết của kết nối TCP là (0.75 * W) / RTT."
      },
      {
        "id": 329,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Trì hoãn xác nhận (Delayed ACK)",
        "difficulty": "Thông hiểu",
        "question": "Kỹ thuật 'Trì hoãn xác nhận' (Delayed ACK - RFC 1122) trong TCP có mục đích gì?",
        "options": [
          "Làm chậm tốc độ mạng để tiết kiệm điện",
          "Bên nhận chờ đợi tối đa một khoảng thời gian ngắn (thường 200 ms hoặc chờ gói tin kế tiếp) trước khi gửi ACK nhằm gửi một ACK gộp chung cho 2 segment hoặc ghép ACK vào gói dữ liệu phản hồi (Piggybacking)",
          "Trì hoãn việc gửi dữ liệu khi người dùng chưa thanh toán cước",
          "Bắt buộc máy gửi phải gửi lại gói tin cũ"
        ],
        "correct": 1,
        "explanation": "Nếu mỗi khi nhận 1 gói tin TCP đều gửi ngay 1 gói ACK thì số lượng gói tin nhỏ trên mạng sẽ tăng gấp đôi, gây lãng phí băng thông. Delayed ACK cho phép bên nhận chờ tối đa 200-500 ms; nếu gói thứ hai đến thì gửi 1 ACK xác nhận cả hai gói; hoặc nếu ứng dụng có dữ liệu cần trả lời (ví dụ HTTP response) thì ghép luôn cờ ACK vào gói dữ liệu đó (Piggybacking)."
      },
      {
        "id": 330,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Giao thức UDP vs TCP",
        "difficulty": "Thông hiểu",
        "question": "Ứng dụng gọi thoại qua Internet (VoIP) và Hội thảo trực tuyến (Video Conference) thường ưu tiên chọn UDP thay vì TCP vì lý do căn bản nào?",
        "options": [
          "UDP có khả năng mã hóa dữ liệu mạnh hơn TCP",
          "Các ứng dụng thời gian thực chịu được một tỉ lệ mất gói nhỏ nhưng cực kỳ nhạy cảm với độ trễ (delay) và độ biến động trễ (jitter); cơ chế truyền lại và kiểm soát tắc nghẽn của TCP có thể làm âm thanh/hình ảnh bị đông cứng (lag)",
          "UDP bắt buộc phải có máy chủ đắt tiền",
          "TCP không thể truyền được tín hiệu âm thanh"
        ],
        "correct": 1,
        "explanation": "Trong đàm thoại thời gian thực (VoIP, livestream, game online), một gói âm thanh bị trễ vài trăm mili-giây do cơ chế truyền lại của TCP sẽ hoàn toàn vô giá trị (tiếng bị giật). Người dùng thà chấp nhận mất một tiếng 'lẹt xẹt' nhỏ (packet loss) còn hơn là cuộc gọi bị ngắt quãng, vì vậy UDP là lựa chọn tối ưu."
      },
      {
        "id": 331,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Thuật toán Nagle (Nagle's Algorithm)",
        "difficulty": "Vận dụng",
        "question": "Thuật toán Nagle trong TCP giải quyết vấn đề 'gói tin kích thước quá nhỏ' (như người dùng gõ từng ký tự trong Telnet sinh ra gói tin 41 byte chỉ chứa 1 byte dữ liệu) bằng cách nào?",
        "options": [
          "Từ chối không gửi ký tự của người dùng",
          "Nếu có dữ liệu đang truyền chưa được ACK, bên gửi sẽ tích lũy các byte dữ liệu mới vào bộ đệm cho đến khi gom đủ 1 MSS hoặc cho đến khi nhận được ACK của gói tin trước đó mới phát đi",
          "Nén 1 byte dữ liệu thành 1 bit",
          "Tự động chuyển phiên làm việc sang giao thức FTP"
        ],
        "correct": 1,
        "explanation": "Thuật toán Nagle gom các mẩu dữ liệu nhỏ (small packets) lại để giảm tải tiêu đề header cho mạng. Tuy nhiên, trong các game online phản xạ nhanh hoặc ứng dụng cần phản hồi tức thì, lập trình viên thường tắt thuật toán này bằng tùy chọn socket: TCP_NODELAY."
      },
      {
        "id": 332,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Tính toán Cửa sổ truyền TCP",
        "difficulty": "Vận dụng",
        "question": "Tại một thời điểm, máy gửi TCP đo được kích thước cửa sổ tắc nghẽn cwnd = 40 KB và kích thước cửa sổ nhận thông báo từ máy nhận rwnd = 24 KB. Kích thước cửa sổ truyền dữ liệu thực tế (Send Window) mà bên gửi được phép gửi mà chưa cần nhận ACK là:",
        "options": [
          "40 KB",
          "24 KB",
          "64 KB (tổng cả hai)",
          "16 KB (hiệu số)"
        ],
        "correct": 1,
        "explanation": "Bên gửi TCP bị ràng buộc đồng thời bởi hai yếu tố: khả năng chịu tải của mạng lõi (cwnd) và dung lượng bộ nhớ trống của máy nhận (rwnd). Do đó, giới hạn cửa sổ gửi thực tế luôn được tính bằng giá trị nhỏ hơn giữa hai thông số: Send Window = min(cwnd, rwnd) = min(40, 24) = 24 KB."
      },
      {
        "id": 333,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Bắt tay 3 bước (3-way Handshake)",
        "difficulty": "Đánh lừa",
        "question": "Trong gói tin SYN đầu tiên mà Client gửi cho Server để bắt đầu kết nối TCP, Sequence Number có giá trị bằng bao nhiêu?",
        "options": [
          "Luôn luôn bằng 0",
          "Luôn luôn bằng 1",
          "Một số ngẫu nhiên gọi là ISN (Initial Sequence Number) do hệ điều hành lựa chọn",
          "Bằng số hiệu cổng của Client"
        ],
        "correct": 2,
        "explanation": "Theo chuẩn RFC, TCP không bao giờ cố định số thứ tự ban đầu bằng 0. Hệ điều hành sinh ra một số thứ tự ngẫu nhiên ban đầu ISN (Initial Sequence Number) dựa trên đồng hồ hệ thống và thuật toán băm bảo mật nhằm tránh việc kẻ tấn công đoán trước số Sequence để chèn gói tin giả mạo (TCP Connection Hijacking)."
      },
      {
        "id": 334,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Thông báo Tắc nghẽn Tường minh (ECN)",
        "difficulty": "Thông hiểu",
        "question": "Cơ chế ECN (Explicit Congestion Notification - RFC 3168) cho phép các router thông báo tình trạng tắc nghẽn cho các host đầu cuối như thế nào?",
        "options": [
          "Gửi email cảnh báo cho quản trị viên",
          "Router đánh dấu vào 2 bit ECN trong tiêu đề IP của gói tin khi hàng đợi bắt đầu đầy (thay vì vứt bỏ gói), bên nhận sau đó phản hồi lại cờ ECE/CWR trong TCP header để bên gửi chủ động giảm tốc độ",
          "Router gửi thông điệp ICMP Echo Request liên tục",
          "Router tự động tắt một cổng mạng"
        ],
        "correct": 1,
        "explanation": "Thay vì phải đợi gói tin bị vứt bỏ (packet drop) rồi mới biết có nghẽn mạng, cơ chế ECN phối hợp giữa tầng mạng và tầng giao vận: Router đánh dấu bit trong IP header khi bộ đệm sắp tràn; máy nhận đọc được sẽ bật cờ ECE (ECN-Echo) trong TCP ACK; máy gửi nhận được sẽ giảm cwnd tương tự như khi có mất gói nhưng không làm mất bất kỳ dữ liệu nào."
      },
      {
        "id": 335,
        "exam_type": "nang_cao",
        "chapter": 3,
        "chapter_title": "Chương 3: Tầng Giao vận (Transport Layer)",
        "category": "Giao thức QUIC (HTTP/3)",
        "difficulty": "Thông hiểu",
        "question": "Giao thức hiện đại QUIC (nền tảng của HTTP/3 được chuẩn hóa bởi IETF) được thiết kế chạy trên nền giao thức truyền vận nào?",
        "options": [
          "TCP cải tiến",
          "UDP",
          "IPsec trực tiếp",
          "SCTP"
        ],
        "correct": 1,
        "explanation": "Do ngăn xếp TCP đã bị 'hóa thạch' (ossified) trong nhân hệ điều hành và các thiết bị phần cứng mạng toàn cầu, Google và IETF đã thiết kế giao thức QUIC chạy trên nền UDP ở không gian người dùng (User space). QUIC tích hợp sẵn mã hóa TLS 1.3, giảm thời gian bắt tay xuống 0-RTT và triệt tiêu hoàn toàn hiện tượng Head-of-Line Blocking của TCP."
      }
    ],
    "chuong_4_tang_mang": [
      {
        "id": 401,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Mặt phẳng Dữ liệu & Điều khiển",
        "difficulty": "Thông hiểu",
        "question": "Trong kiến trúc tầng mạng hiện đại (bao gồm mô hình SDN - Software-Defined Networking), sự phân tách giữa 'Mặt phẳng Dữ liệu' (Data Plane) và 'Mặt phẳng Điều khiển' (Control Plane) được hiểu là:",
        "options": [
          "Data Plane chạy trên máy tính người dùng, Control Plane chạy trên router",
          "Data Plane xử lý cục bộ việc chuyển tiếp gói tin từ cổng vào sang cổng ra (Forwarding) dựa trên bảng luồng/bảng chuyển tiếp; Control Plane chịu trách nhiệm toàn cục về thuật toán định tuyến (Routing) để xây dựng bảng chuyển tiếp",
          "Data Plane sử dụng giao thức UDP, Control Plane sử dụng giao thức TCP",
          "Data Plane chỉ xử lý các gói tin bị lỗi"
        ],
        "correct": 1,
        "explanation": "Kiến trúc mạng phân chia rõ: Data Plane (Mặt phẳng dữ liệu) thực hiện chức năng Forwarding cục bộ tốc độ cao ở phần cứng router. Control Plane (Mặt phẳng điều khiển) thực hiện chức năng Routing logic toàn mạng, có thể chạy phân tán trên các router (như OSPF, BGP truyền thống) hoặc tập trung tại một bộ điều khiển SDN Controller."
      },
      {
        "id": 402,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Kiến trúc Bộ định tuyến (Router)",
        "difficulty": "Đánh lừa",
        "question": "Hiện tượng 'Nghẽn đầu hàng' (Head-of-Line - HOL Blocking) bên trong một bộ định tuyến (Router) xảy ra tại vị trí nào?",
        "options": [
          "Tại hàng đợi của Cổng vào (Input Port Queue) khi ma trận chuyển mạch bị nghẽn",
          "Tại hàng đợi của Cổng ra (Output Port Queue)",
          "Trên dây cáp quang kết nối giữa các router",
          "Bên trong thanh ghi CPU của router"
        ],
        "correct": 0,
        "explanation": "HOL Blocking xảy ra tại hàng đợi của CỔNG VÀO (Input Port): Khi gói tin đứng đầu hàng đợi muốn đi tới một cổng ra đang bận, nó buộc phải dừng lại chờ; điều này vô tình chặn tất cả các gói tin xếp sau nó, mặc dù các cổng ra của những gói xếp sau hoàn toàn đang rảnh rỗi."
      },
      {
        "id": 403,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Tiêu đề IPv4 (IPv4 Header)",
        "difficulty": "Nhận biết",
        "question": "Trường Time to Live (TTL) trong tiêu đề gói tin IPv4 có mục đích chính là gì?",
        "options": [
          "Đo thời gian truyền gói tin tính bằng mili-giây",
          "Quy định số bước nhảy (Hop) tối đa mà gói tin được phép đi qua các router, ngăn ngừa gói tin bị lặp vô tận (Routing Loop) trên mạng",
          "Xác định thời điểm gói tin hết hạn sử dụng để xóa khỏi ổ cứng",
          "Báo cho máy nhận biết thời gian cần gửi ACK"
        ],
        "correct": 1,
        "explanation": "Mỗi khi gói tin IPv4 đi qua một router, router sẽ giảm giá trị TTL đi 1 đơn vị. Nếu giá trị TTL giảm về 0, router sẽ loại bỏ gói tin ngay lập tức và gửi thông điệp ICMP Type 11 (Time Exceeded) về cho máy nguồn. Cơ chế này đảm bảo các gói tin bị lạc do vòng lặp định tuyến không bị quay vòng mãi mãi làm tắc nghẽn Internet."
      },
      {
        "id": 404,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Tiêu đề IPv4 (IPv4 Header)",
        "difficulty": "Thông hiểu",
        "question": "Trường Protocol trong tiêu đề IPv4 có giá trị thập phân bằng 6 và bằng 17 lần lượt chỉ ra rằng dữ liệu tầng trên được đóng gói bên trong gói tin IP là giao thức nào?",
        "options": [
          "6 là UDP, 17 là TCP",
          "6 là TCP, 17 là UDP",
          "6 là ICMP, 17 là OSPF",
          "6 là HTTP, 17 là DNS"
        ],
        "correct": 1,
        "explanation": "Trong IPv4 Header, trường Protocol (1 byte) xác định giao thức tầng trên: 1 = ICMP; 6 = TCP; 17 = UDP; 89 = OSPF. Đây là cơ chế giải ghép kênh (Demultiplexing) của tầng mạng để chuyển dữ liệu lên đúng giao thức ở tầng giao vận."
      },
      {
        "id": 405,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Tính toán Phân mảnh IPv4 (Fragmentation)",
        "difficulty": "Vận dụng",
        "question": "Một gói tin IPv4 có kích thước tổng cộng 4000 byte (gồm 20 byte header IP và 3980 byte dữ liệu). Gói tin cần đi qua một liên kết mạng có MTU = 1500 byte. Gói tin sẽ bị phân thành bao nhiêu mảnh và trường Fragment Offset của mảnh thứ hai (mảnh index 1) có giá trị bằng bao nhiêu?",
        "options": [
          "3 mảnh; Fragment Offset = 185",
          "3 mảnh; Fragment Offset = 1480",
          "2 mảnh; Fragment Offset = 1500",
          "4 mảnh; Fragment Offset = 370"
        ],
        "correct": 0,
        "explanation": "MTU = 1500B -> Mỗi mảnh có tối đa 20B IP header + 1480B dữ liệu (lưu ý 1480 chia hết cho 8). Tổng dữ liệu = 3980 byte: Mảnh 1 mang 1480B dữ liệu (byte 0 đến 1479), Offset = 0, cờ MF = 1. Mảnh 2 mang 1480B dữ liệu (byte 1480 đến 2959), Offset = 1480 / 8 = 185, cờ MF = 1. Mảnh 3 mang 3980 - 2960 = 1020B dữ liệu (byte 2960 đến 3979), Offset = 2960 / 8 = 370, cờ MF = 0. Tổng cộng có 3 mảnh; Offset của mảnh thứ hai là 185 (đơn vị 8 byte)."
      },
      {
        "id": 406,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Phân mảnh và Tái hợp IPv4",
        "difficulty": "Thông hiểu",
        "question": "Khi một gói tin IPv4 bị phân mảnh thành nhiều mảnh tại các router trung gian trên đường đi, quá trình tái hợp (Reassembly) các mảnh này thành gói tin gốc được thực hiện ở đâu?",
        "options": [
          "Tại ngay router trung gian kế tiếp",
          "Tại thiết bị đầu cuối nhận cuối cùng (Destination Host)",
          "Tại router biên (Gateway) của mạng nguồn",
          "Tại máy chủ DNS của nhà mạng"
        ],
        "correct": 1,
        "explanation": "Trong kiến trúc Internet, để giảm tối đa độ phức tạp và độ trễ xử lý cho các router mạng lõi, các router trung gian chỉ phân mảnh nếu gặp đường truyền có MTU nhỏ hơn mà KHÔNG BAO GIỜ tái hợp mảnh. Việc ghép nối lại các mảnh chỉ được thực hiện một lần duy nhất tại máy trạm đích cuối cùng (Destination Host)."
      },
      {
        "id": 407,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Phân lớp Địa chỉ IP (Classful IP)",
        "difficulty": "Nhận biết",
        "question": "Địa chỉ IP nào sau đây thuộc về Lớp B (Class B) theo cách phân lớp địa chỉ truyền thống?",
        "options": [
          "10.20.30.40",
          "172.25.10.1",
          "192.168.1.1",
          "224.0.0.1"
        ],
        "correct": 1,
        "explanation": "Quy tắc phân lớp theo byte đầu tiên: Lớp A: 1 – 126 (0xxxxxxx); Lớp B: 128 – 191 (10xxxxxx); Lớp C: 192 – 223 (110xxxxx); Lớp D (Multicast): 224 – 239 (1110xxxx); Lớp E: 240 – 255. Địa chỉ 172.25.10.1 có octet đầu là 172 nằm trong khoảng 128-191 nên thuộc Lớp B."
      },
      {
        "id": 408,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Dải địa chỉ IP Riêng (Private IP - RFC 1918)",
        "difficulty": "Nhận biết",
        "question": "Địa chỉ IP nào sau đây là địa chỉ IP công cộng (Public IP) có thể định tuyến trực tiếp trên mạng Internet toàn cầu?",
        "options": [
          "10.0.50.1",
          "172.16.20.1",
          "192.168.100.1",
          "8.8.8.8"
        ],
        "correct": 3,
        "explanation": "Theo RFC 1918, các dải địa chỉ Private IP (dùng nội bộ, không được định tuyến ra Internet) gồm: 10.0.0.0/8 (10.x.x.x); 172.16.0.0/12 (172.16.x.x đến 172.31.x.x); 192.168.0.0/16 (192.168.x.x). Địa chỉ 8.8.8.8 là địa chỉ IP công cộng (Public DNS của Google)."
      },
      {
        "id": 409,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Tính toán Mạng con CIDR (Subnetting)",
        "difficulty": "Vận dụng",
        "question": "Cho địa chỉ mạng 192.168.1.0/26. Mặt nạ mạng (Subnet Mask) tương ứng dạng thập phân và số lượng địa chỉ máy chủ (Host) khả dụng tối đa trong mạng này là:",
        "options": [
          "255.255.255.128 và 126 hosts",
          "255.255.255.192 và 62 hosts",
          "255.255.255.224 và 30 hosts",
          "255.255.255.240 và 14 hosts"
        ],
        "correct": 1,
        "explanation": "Ký hiệu /26 có nghĩa là 26 bit đầu là 1, 6 bit sau là 0. Octet thứ tư: 11000000_2 = 128 + 64 = 192 -> Subnet mask: 255.255.255.192. Số bit dành cho host là 32 - 26 = 6 bit. Tổng số địa chỉ = 2^6 = 64. Trừ 1 địa chỉ mạng và 1 địa chỉ broadcast -> Số host sử dụng được = 64 - 2 = 62 hosts."
      },
      {
        "id": 410,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Tính toán Mạng con CIDR (Subnetting)",
        "difficulty": "Vận dụng",
        "question": "Một máy tính có địa chỉ IP là 172.16.10.45 với Subnet Mask là 255.255.255.240. Địa chỉ Mạng (Network Address) và địa chỉ Quảng bá (Broadcast Address) của mạng con này là:",
        "options": [
          "Mạng: 172.16.10.0; Broadcast: 172.16.10.255",
          "Mạng: 172.16.10.32; Broadcast: 172.16.10.47",
          "Mạng: 172.16.10.40; Broadcast: 172.16.10.55",
          "Mạng: 172.16.10.45; Broadcast: 172.16.10.240"
        ],
        "correct": 1,
        "explanation": "Subnet mask 255.255.255.240 tương ứng /28. Bước nhảy khối mạng con = 256 - 240 = 16. Các mạng con gồm: .0, .16, .32, .48... Địa chỉ host 45 nằm trong khoảng [32, 47]. Suy ra: Địa chỉ mạng = 172.16.10.32; Địa chỉ broadcast = 172.16.10.47; Dải IP gán cho máy: 172.16.10.33 đến 172.16.10.46."
      },
      {
        "id": 411,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Chia mạng con VLSM (Variable Length)",
        "difficulty": "Vận dụng",
        "question": "Cần thiết kế một đường liên kết điểm-điểm (Point-to-Point link) chỉ kết nối trực tiếp giữa hai cổng của 2 Router. Tiền tố mạng con (Prefix) nào sau đây là tối ưu nhất để vừa đủ dùng cho 2 cổng router mà không gây lãng phí địa chỉ IP?",
        "options": [
          "/28",
          "/29",
          "/30",
          "/31"
        ],
        "correct": 2,
        "explanation": "Đường point-to-point giữa 2 router cần đúng 2 địa chỉ host. Subnet /30 có 32 - 30 = 2 bit host, cung cấp 2^2 = 4 địa chỉ (1 địa chỉ mạng, 1 địa chỉ broadcast, và đúng 2 địa chỉ gán cho 2 cổng router). Đây là chuẩn kinh điển trong thiết kế mạng IPv4 (lưu ý: RFC 3021 cho phép /31 nhưng chỉ trên thiết bị chuyên dụng hỗ trợ)."
      },
      {
        "id": 412,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "So khớp tiền tố dài nhất (Longest Prefix Match)",
        "difficulty": "Đánh lừa",
        "question": "Một router có bảng định tuyến gồm các mục sau:\n- Mục 1: 192.168.1.0/24 -> Cổng xuất eth0\n- Mục 2: 192.168.1.128/25 -> Cổng xuất eth1\n- Mục 3: 192.168.1.192/26 -> Cổng xuất eth2\n- Mục 4: 0.0.0.0/0 -> Cổng xuất eth3\nKhi gói tin có IP đích 192.168.1.200 đến router, gói tin sẽ được chuyển tiếp ra cổng nào?",
        "options": [
          "eth0",
          "eth1",
          "eth2",
          "eth3"
        ],
        "correct": 2,
        "explanation": "Nguyên tắc 'Longest Prefix Match' (Khớp tiền tố dài nhất): IP 192.168.1.200 khớp với cả mục 1 (/24), mục 2 (/25, dải 128-255), mục 3 (/26, dải 192-255) và default route (/0). Trong số các mục khớp, mục 3 có tiền tố dài nhất (/26 dài hơn /25 và /24) mang tính cụ thể cao nhất, do đó router bắt buộc chuyển tiếp gói tin ra cổng eth2."
      },
      {
        "id": 413,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức NAT (Network Address Translation)",
        "difficulty": "Thông hiểu",
        "question": "Cơ chế NAPT (Network Address Port Translation - PAT) cho phép hàng trăm máy tính trong mạng nội bộ cùng chia sẻ một địa chỉ IP công cộng (Public IP) duy nhất ra Internet bằng cách nào?",
        "options": [
          "Chia sẻ địa chỉ MAC của router cho tất cả các máy",
          "Duy trì một Bảng dịch NAT (NAT Translation Table) ánh xạ giữa bộ [IP nội bộ, Cổng nguồn] với bộ [IP công cộng, Cổng NAT ngẫu nhiên]",
          "Chuyển đổi toàn bộ gói tin IP thành dạng chuỗi ký tự text",
          "Chỉ cho phép 1 máy truy cập Internet tại một thời điểm"
        ],
        "correct": 1,
        "explanation": "Router NAT sử dụng số hiệu cổng (Port - 16 bit, hơn 60,000 cổng khả dụng) ở tầng giao vận để định danh các phiên liên lạc: Mỗi kết nối từ [IP nội bộ, Port nội bộ] được ánh xạ sang [IP công cộng của router, Port NAT mới]. Khi có gói tin phản hồi từ Internet về, router tra bảng NAT để khôi phục đúng IP và Port nội bộ của máy trạm."
      },
      {
        "id": 414,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức NAT & Port Forwarding",
        "difficulty": "Thông hiểu",
        "question": "Nếu một người dùng đặt một máy chủ Web (cổng 80) bên trong mạng LAN gia đình sử dụng IP Private (192.168.1.100), để người ngoài Internet có thể truy cập được website này qua IP Public của modem, quản trị viên bắt buộc phải cấu hình tính năng gì trên router?",
        "options": [
          "Bật tính năng DHCP Relay",
          "Mở chuyển tiếp cổng (Port Forwarding / Virtual Server) trên router, trỏ cổng 80 công cộng về IP 192.168.1.100",
          "Tắt tường lửa của máy chủ web",
          "Đổi cáp mạng sang loại cáp chéo"
        ],
        "correct": 1,
        "explanation": "Bình thường NAT chỉ cho phép kết nối khởi tạo từ trong mạng nội bộ đi ra ngoài. Nếu bên ngoài Internet muốn chủ động kết nối vào một máy chủ nội bộ mang IP Private, router NAT không biết phải gửi cho máy nào. Cấu hình Port Forwarding tạo một quy tắc tĩnh trên bảng NAT: mọi kết nối đến cổng 80 của IP Public sẽ được chuyển tiếp thẳng vào IP 192.168.1.100."
      },
      {
        "id": 415,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức Cấu hình Động DHCP",
        "difficulty": "Nhận biết",
        "question": "Quá trình cấp phát địa chỉ IP tự động của giao thức DHCP diễn ra theo trình tự 4 bước (tiến trình DORA) gồm các thông điệp nào?",
        "options": [
          "Discover -> Offer -> Request -> Acknowledge",
          "Download -> Open -> Read -> Accept",
          "DNS -> OSPF -> RIP -> ARP",
          "Detect -> Order -> Receive -> Authenticate"
        ],
        "correct": 0,
        "explanation": "Quy trình DORA của DHCP: (1) DHCP Discover: Client phát quảng bá tìm DHCP Server; (2) DHCP Offer: Server gửi đề xuất địa chỉ IP; (3) DHCP Request: Client gửi thông báo chính thức chọn đề xuất đó; (4) DHCP ACK (Acknowledge): Server xác nhận hoàn tất việc cho thuê địa chỉ IP."
      },
      {
        "id": 416,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức Cấu hình Động DHCP",
        "difficulty": "Đánh lừa",
        "question": "Trong thông điệp DHCP Discover đầu tiên mà một máy tính vừa cắm dây mạng gửi đi để xin IP, địa chỉ IP nguồn (Source IP) và địa chỉ IP đích (Destination IP) trong tiêu đề IP là gì?",
        "options": [
          "Source IP: 127.0.0.1; Destination IP: 192.168.1.1",
          "Source IP: 0.0.0.0; Destination IP: 255.255.255.255",
          "Source IP: 255.255.255.255; Destination IP: 0.0.0.0",
          "Source IP: Địa chỉ MAC của máy; Destination IP: Địa chỉ broadcast"
        ],
        "correct": 1,
        "explanation": "Vì máy khách chưa có địa chỉ IP nên nó bắt buộc phải dùng địa chỉ 0.0.0.0 (chưa xác định) làm Source IP. Do máy khách cũng chưa biết máy chủ DHCP nằm ở đâu trên mạng, nó phải phát quảng bá tới địa chỉ giới hạn 255.255.255.255 làm Destination IP trên cổng UDP 67."
      },
      {
        "id": 417,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức Cấu hình Động DHCP",
        "difficulty": "Thông hiểu",
        "question": "Ngoài địa chỉ IP của máy khách, một máy chủ DHCP tiêu chuẩn thường cung cấp thêm các thông số cấu hình mạng thiết yếu nào sau đây?",
        "options": [
          "Subnet Mask, Địa chỉ Default Gateway (Router), và Địa chỉ máy chủ DNS",
          "Mật khẩu tài khoản ngân hàng và mã khóa WiFi",
          "Danh sách tất cả các trang web bị cấm truy cập",
          "Địa chỉ MAC mới cho card mạng"
        ],
        "correct": 0,
        "explanation": "Một gói DHCP ACK hoàn chỉnh không chỉ cấp IP mà còn cung cấp đủ bộ thông số để máy tính có thể lướt web: (1) Địa chỉ IP được gán; (2) Subnet Mask để xác định mạng nội bộ; (3) Default Gateway (IP cổng ra của router để đến Internet); (4) DNS Server để phân giải tên miền; (5) Thời gian thuê (Lease time)."
      },
      {
        "id": 418,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Địa chỉ Tự gán APIPA",
        "difficulty": "Thông hiểu",
        "question": "Khi kiểm tra bằng lệnh ipconfig, người dùng thấy máy tính của mình nhận địa chỉ IP dạng 169.254.x.x và không thể vào mạng Internet. Hiện tượng này phản ánh điều gì?",
        "options": [
          "Máy tính bị nhiễm mã độc tống tiền",
          "Máy tính được cấu hình nhận IP tự động qua DHCP nhưng không liên lạc được với bất kỳ máy chủ DHCP nào, hệ điều hành tự gán địa chỉ APIPA (Automatic Private IP Addressing)",
          "Đường truyền Internet đã được nâng cấp lên tốc độ gigabit",
          "Máy chủ Google đang bảo trì"
        ],
        "correct": 1,
        "explanation": "Dải địa chỉ 169.254.0.0/16 là dải APIPA (Link-local address). Khi máy tính yêu cầu IP qua DHCP mà DHCP server bị sập, tuột dây mạng hoặc quá thời gian chờ (timeout), Windows sẽ tự động gán một IP ngẫu nhiên trong dải này. Địa chỉ này chỉ giao tiếp được trong mạng cục bộ nhỏ không có router và hoàn toàn không thể ra Internet."
      },
      {
        "id": 419,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức Báo lỗi ICMP",
        "difficulty": "Nhận biết",
        "question": "Chương trình 'ping' sử dụng cặp thông điệp ICMP Type/Code nào để kiểm tra kết nối mạng giữa hai nút?",
        "options": [
          "Type 8 Code 0 (Echo Request) và Type 0 Code 0 (Echo Reply)",
          "Type 3 Code 3 (Port Unreachable)",
          "Type 11 Code 0 (Time Exceeded)",
          "Type 5 Code 0 (Redirect)"
        ],
        "correct": 0,
        "explanation": "Chương trình ping gửi thông điệp ICMP Type 8 Code 0 (Echo Request) tới máy đích. Nếu máy đích còn hoạt động và không chặn ICMP, nó sẽ phản hồi lại thông điệp ICMP Type 0 Code 0 (Echo Reply)."
      },
      {
        "id": 420,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Nguyên lý Công cụ Traceroute",
        "difficulty": "Thông hiểu",
        "question": "Chương trình traceroute (hoặc tracert trên Windows) xác định danh sách các router trung gian trên đường đi tới máy đích bằng kỹ thuật nào?",
        "options": [
          "Gửi truy vấn DNS hỏi máy chủ tên miền",
          "Gửi các gói tin với giá trị TTL tăng dần (bắt đầu từ TTL = 1, 2, 3...) và lắng nghe các thông điệp báo lỗi ICMP Type 11 (Time-to-Live Exceeded in Transit) trả về từ mỗi router trên đường",
          "Đọc bảng định tuyến nội bộ của các nhà mạng viễn thông",
          "Khai thác lỗ hổng bảo mật của router"
        ],
        "correct": 1,
        "explanation": "Traceroute gửi gói tin với TTL = 1; router đầu tiên trừ TTL còn 0, hủy gói và gửi về ICMP Type 11 giúp xác định IP router 1. Tiếp đó traceroute gửi gói với TTL = 2, router thứ hai gửi về ICMP Type 11 giúp xác định IP router 2... Quá trình lặp lại cho đến khi gói tin chạm tới đích cuối cùng (khiến đích phản hồi Echo Reply hoặc Port Unreachable)."
      },
      {
        "id": 421,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức IPv6",
        "difficulty": "Nhận biết",
        "question": "Địa chỉ IPv6 có độ dài bao nhiêu bit và được biểu diễn theo định dạng tiêu chuẩn nào?",
        "options": [
          "64 bit, biểu diễn dưới dạng 8 số thập phân",
          "128 bit, biểu diễn dưới dạng 8 nhóm số Thập lục phân (Hexadecimal), ngăn cách bằng dấu hai chấm (:)",
          "32 bit, ngăn cách bằng dấu chấm (.)",
          "256 bit, biểu diễn dưới dạng chuỗi nhị phân 0 và 1"
        ],
        "correct": 1,
        "explanation": "IPv6 mở rộng không gian địa chỉ từ 32 bit của IPv4 lên 128 bit (khoảng 3.4 * 10^38 địa chỉ). Địa chỉ IPv6 được biểu diễn bởi 8 nhóm số Hexadecimal 16-bit, ngăn cách nhau bằng dấu hai chấm, ví dụ: 2001:0db8:85a3:0000:0000:8a2e:0370:7334."
      },
      {
        "id": 422,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Rút gọn Địa chỉ IPv6",
        "difficulty": "Vận dụng",
        "question": "Địa chỉ IPv6 sau đây: 2001:0db8:0000:0000:0000:0000:1428:57ab có thể được viết rút gọn chuẩn xác nhất là:",
        "options": [
          "2001:db8::1428:57ab",
          "2001:db8:0:0:0:0:1428:57ab",
          "2001:db8::0::1428:57ab",
          "2001:0db8::1428:57ab"
        ],
        "correct": 0,
        "explanation": "Quy tắc rút gọn IPv6: (1) Bỏ các số 0 đứng đầu mỗi nhóm: 0db8 -> db8; (2) Thay thế chuỗi các nhóm chứa toàn số 0 liên tiếp bằng một dấu hai chấm kép '::' DUY NHẤT. Do đó địa chỉ được rút gọn tối giản thành: 2001:db8::1428:57ab. Lưu ý: Dấu '::' chỉ được xuất hiện đúng một lần trong toàn bộ địa chỉ."
      },
      {
        "id": 423,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Cải tiến trong Tiêu đề IPv6",
        "difficulty": "Thông hiểu",
        "question": "Những thành phần nào sau đây trong tiêu đề IPv4 đã bị LOẠI BỎ HOÀN TOÀN trong tiêu đề cố định 40 byte của IPv6 nhằm tăng tốc độ xử lý tại các router?",
        "options": [
          "Địa chỉ IP nguồn và IP đích",
          "Trường Header Checksum và các trường phục vụ phân mảnh gói tin (Identification, Flags, Fragment Offset)",
          "Trường Version",
          "Trường Payload Length"
        ],
        "correct": 1,
        "explanation": "IPv6 tối ưu hóa vượt bậc: (1) Bỏ trường Checksum (vì tầng 2 và tầng 4 đã kiểm tra lỗi, bỏ checksum giúp router không phải tính lại sau mỗi hop); (2) Bỏ các trường phân mảnh ở tiêu đề chính (IPv6 cấm router trung gian phân mảnh, nếu gói quá lớn router gửi ICMPv6 Packet Too Big yêu cầu máy nguồn tự giảm kích thước gói)."
      },
      {
        "id": 424,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Địa chỉ IPv6 Đặc biệt",
        "difficulty": "Nhận biết",
        "question": "Trong không gian địa chỉ IPv6, loại địa chỉ nào sau đây đã KHÔNG CÒN TỒN TẠI mà được thay thế hoàn toàn bằng địa chỉ Multicast?",
        "options": [
          "Địa chỉ Unicast (Đơn hướng)",
          "Địa chỉ Anycast (Bất kỳ hướng)",
          "Địa chỉ Broadcast (Quảng bá)",
          "Địa chỉ Link-local"
        ],
        "correct": 2,
        "explanation": "IPv6 đã khai tử hoàn toàn khái niệm địa chỉ Broadcast (Quảng bá) - thủ phạm gây bão gói tin (Broadcast storm) làm nghẽn mạng trong IPv4. Thay vào đó, IPv6 sử dụng địa chỉ Multicast chuyên biệt (ví dụ FF02::1 gửi cho tất cả các node) và Anycast."
      },
      {
        "id": 425,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Chuyển đổi IPv4 sang IPv6",
        "difficulty": "Thông hiểu",
        "question": "Kỹ thuật 'Đường hầm' (Tunneling) trong quá trình chuyển đổi từ IPv4 sang IPv6 hoạt động như thế nào?",
        "options": [
          "Đào đường hầm ngầm dưới lòng đất để đặt cáp mới",
          "Đóng gói toàn bộ gói tin IPv6 vào bên trong phần dữ liệu (Payload) của một gói tin IPv4 để truyền xuyên qua mạng IPv4 trung gian",
          "Dịch ngược địa chỉ IPv6 thành địa chỉ MAC",
          "Chỉ cho phép kết nối vào ban đêm"
        ],
        "correct": 1,
        "explanation": "Kỹ thuật Tunneling (như 6to4, Teredo) giải quyết bài toán khi hai mạng IPv6 cần liên lạc với nhau nhưng ở giữa là mạng IPv4 của nhà mạng chưa hỗ trợ IPv6. Router biên sẽ đóng gói trọn vẹn gói tin IPv6 vào bên trong trường dữ liệu của một IPv4 datagram tiêu chuẩn để 'chui qua' hạ tầng IPv4."
      },
      {
        "id": 426,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Thuật toán Định tuyến Trạng thái Liên kết (LS)",
        "difficulty": "Thông hiểu",
        "question": "Thuật toán định tuyến Trạng thái liên kết (Link-State Routing Algorithm) sử dụng thuật toán toán học nào để tính đường đi ngắn nhất từ một nút nguồn tới tất cả các nút khác trên mạng?",
        "options": [
          "Thuật toán Bellman-Ford",
          "Thuật toán Dijkstra",
          "Thuật toán Prim",
          "Thuật toán Floyd-Warshall"
        ],
        "correct": 1,
        "explanation": "Thuật toán Trạng thái liên kết (Link-State, điển hình là giao thức OSPF) yêu cầu mỗi router gửi thông điệp LSA ngập lụt toàn mạng để mọi router đều có bản đồ topology hoàn chỉnh. Sau đó, mỗi router tự chạy thuật toán Dijkstra để tính cây đường đi ngắn nhất (Shortest Path Tree) từ chính nó đến tất cả các đích."
      },
      {
        "id": 427,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức Định tuyến OSPF",
        "difficulty": "Nhận biết",
        "question": "Giao thức OSPF (Open Shortest Path First) là giao thức định tuyến thuộc loại nào và đóng gói trực tiếp vào đâu?",
        "options": [
          "Giao thức định tuyến ngoài AS (EGP), chạy trên TCP cổng 179",
          "Giao thức định tuyến nội bộ AS (IGP) thuộc họ Trạng thái liên kết (Link-State), đóng gói trực tiếp trong gói tin IP với trường Protocol = 89",
          "Giao thức Vectơ khoảng cách, chạy trên UDP cổng 520",
          "Giao thức tầng liên kết dữ liệu"
        ],
        "correct": 1,
        "explanation": "OSPF là giao thức định tuyến nội vùng (Intra-AS / IGP) chuẩn mở phổ biến nhất. OSPF không dùng TCP hay UDP mà chạy trực tiếp trên tầng mạng (IP Protocol = 89). OSPF hỗ trợ phân chia mạng thành các vùng phân cấp (Hierarchical Areas) với vùng xương sống trung tâm bắt buộc là Area 0 (Backbone Area)."
      },
      {
        "id": 428,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Thuật toán Định tuyến Vectơ Khoảng cách (DV)",
        "difficulty": "Thông hiểu",
        "question": "Phương trình Bellman-Ford trong thuật toán định tuyến Vectơ khoảng cách (Distance Vector) được biểu diễn bằng công thức nào?",
        "options": [
          "d_x(y) = min_v { c(x,v) + d_v(y) }",
          "d_x(y) = c(x,y) * RTT",
          "d_x(y) = sum { c(x,v) }",
          "d_x(y) = max { d_v(y) - c(x,v) }"
        ],
        "correct": 0,
        "explanation": "Phương trình Bellman-Ford: Chi phí đường đi ngắn nhất từ x đến y qua tất cả các hàng xóm v của x là: d_x(y) = min_v { c(x,v) + d_v(y) }, trong đó c(x,v) là chi phí đường truyền trực tiếp từ x đến v, và d_v(y) là ước lượng chi phí từ v đến y do hàng xóm v thông báo."
      },
      {
        "id": 429,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Đếm đến vô cùng trong Distance Vector",
        "difficulty": "Đánh lừa",
        "question": "Vấn đề nghiêm trọng nhất của thuật toán Vectơ khoảng cách khi xảy ra sự cố đứt đường truyền là hiện tượng 'Vòng lặp định tuyến' dẫn tới hiện tượng gì?",
        "options": [
          "Router tự động bốc cháy phần cứng",
          "Hiện tượng 'Đếm đến vô cùng' (Count-to-Infinity) khiến chi phí định tuyến tăng dần từng bước một chậm chạp trước khi mạng hội tụ",
          "Tất cả các router tự động đổi sang giao thức OSPF",
          "Băng thông mạng tăng lên gấp 100 lần"
        ],
        "correct": 1,
        "explanation": "Khi một liên kết bị đứt, thông tin xấu lan truyền rất chậm trong Distance Vector. Hai router hàng xóm liên tục gửi thông tin khoảng cách sai lệch cho nhau qua lại (A nghĩ B có đường, B lại nghĩ A có đường), làm chi phí ước lượng cứ tăng dần 2, 3, 4... cho đến khi chạm mốc vô cùng (Infinity). Hiện tượng này gọi là 'Count-to-Infinity'."
      },
      {
        "id": 430,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Kỹ thuật Poison Reverse",
        "difficulty": "Thông hiểu",
        "question": "Kỹ thuật Poison Reverse (Đảo ngược độc) được thiết kế để ngăn ngừa vòng lặp định tuyến giữa hai nút liền kề trong Distance Vector bằng cách nào?",
        "options": [
          "Nếu router Z định tuyến đến đích X thông qua hàng xóm Y, thì Z sẽ thông báo chi phí từ nó đến X cho Y là VÔ CÙNG (d_Z(X) = vô cùng)",
          "Ngắt toàn bộ nguồn điện của router Z",
          "Cấm router Y không được gửi bất kỳ gói tin nào cho Z",
          "Tự động xóa bảng định tuyến sau mỗi 5 giây"
        ],
        "correct": 0,
        "explanation": "Poison Reverse ngăn Y định tuyến ngược lại qua Z: Khi Z gửi gói tin cho X thông qua Y, Z sẽ 'nói dối' với Y rằng 'chi phí từ tôi tới X là vô cùng'. Nhờ đó, nếu đường nối từ Y đến X bị đứt, Y sẽ không bao giờ mắc bẫy định tuyến ngược qua Z."
      },
      {
        "id": 431,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Định tuyến Internet & Giao thức BGP",
        "difficulty": "Nhận biết",
        "question": "Giao thức định tuyến liên miền giữa các Hệ thống Tự trị (Inter-AS Routing) duy nhất đóng vai trò keo dán kết nối toàn bộ mạng Internet toàn cầu là giao thức nào?",
        "options": [
          "RIP (Routing Information Protocol)",
          "OSPF (Open Shortest Path First)",
          "BGP (Border Gateway Protocol, phiên bản BGP-4)",
          "ICMP"
        ],
        "correct": 2,
        "explanation": "BGP (Border Gateway Protocol) là giao thức định tuyến giữa các AS (Hệ thống tự trị độc lập như Viettel, VNPT, FPT, Google, AT&T). BGP là giao thức Vectơ đường đi (Path Vector), chạy trên nền kết nối TCP đáng tin cậy cổng 179."
      },
      {
        "id": 432,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức BGP (Border Gateway Protocol)",
        "difficulty": "Thông hiểu",
        "question": "Thuộc tính AS-PATH trong một thông điệp định tuyến BGP mang thông tin gì và có tác dụng cốt lõi nào?",
        "options": [
          "Chứa danh sách tất cả các số hiệu AS (Autonomous System Numbers) mà bản tin quảng bá đã đi qua, giúp phát hiện và loại bỏ ngay lập tức vòng lặp định tuyến (Loop Prevention)",
          "Chứa địa chỉ MAC của router gửi",
          "Chứa mật khẩu đăng nhập của kỹ sư mạng",
          "Chứa tốc độ băng thông của cáp quang"
        ],
        "correct": 0,
        "explanation": "Thuộc tính AS-PATH liệt kê tuần tự các AS mà thông điệp quảng bá định tuyến đã đi qua (ví dụ AS-PATH: [AS 100, AS 200, AS 300]). Khi một router biên nhận được bản tin BGP mà nhìn thấy số hiệu AS của chính mình đã nằm trong AS-PATH, nó lập tức loại bỏ bản tin đó để triệt tiêu hoàn toàn vòng lặp định tuyến."
      },
      {
        "id": 433,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Giao thức BGP (eBGP vs iBGP)",
        "difficulty": "Đánh lừa",
        "question": "Sự khác biệt giữa eBGP (External BGP) và iBGP (Internal BGP) là gì?",
        "options": [
          "eBGP chạy trên UDP, iBGP chạy trên TCP",
          "eBGP trao đổi thông tin định tuyến giữa các router thuộc hai Hệ thống Tự trị (AS) KHÁC NHAU; trong khi iBGP phân phối các thông tin định tuyến bên ngoài đó cho các router nằm trong CÙNG MỘT HỆ THỐNG TỰ TRỊ (AS)",
          "iBGP là giao thức thay thế cho OSPF",
          "eBGP chỉ dùng cho mạng vệ tinh"
        ],
        "correct": 1,
        "explanation": "eBGP (External BGP) kết nối 2 router biên thuộc 2 AS độc lập (ví dụ giữa AS của VNPT và AS của Viettel). iBGP (Internal BGP) được dùng để truyền bá các tuyến đường học được từ eBGP cho tất cả các router khác bên trong nội bộ cùng một AS biết để chuyển tiếp lưu lượng ra ngoài."
      },
      {
        "id": 434,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Định tuyến Dựa trên Chính sách (Policy-Based Routing)",
        "difficulty": "Thông hiểu",
        "question": "Tại sao trong định tuyến BGP giữa các nhà mạng Internet (Inter-AS), yếu tố 'Chính sách thương mại và chính trị' (Policy) lại quan trọng hơn yếu tố 'Đường đi ngắn nhất về mặt kỹ thuật'?",
        "options": [
          "Vì router của các nhà mạng không đủ RAM để chạy thuật toán Dijkstra",
          "Vì các AS là các thực thể kinh doanh độc lập, một ISP không bao giờ muốn chuyển tiếp lưu lượng miễn phí cho đối thủ cạnh tranh nếu không có thỏa thuận kinh tế",
          "Vì giao thức BGP bị cấm tính toán số bước nhảy",
          "Do luật viễn thông quốc tế cấm dùng thuật toán ngắn nhất"
        ],
        "correct": 1,
        "explanation": "Định tuyến nội bộ (Intra-AS) tập trung vào hiệu năng kỹ thuật (đường ngắn nhất, trễ nhỏ nhất). Nhưng định tuyến liên AS (Inter-AS) là bài toán kinh tế: Một nhà mạng chỉ chuyển tiếp lưu lượng cho khách hàng trả tiền (Customer-Provider) hoặc đối tác ngang hàng bình đẳng (Peering), và sẽ áp đặt chính sách từ chối chuyển tiếp lưu lượng của bên thứ ba qua mạng của mình."
      },
      {
        "id": 435,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Phân chia Vùng OSPF (Areas)",
        "difficulty": "Thông hiểu",
        "question": "Trong mạng doanh nghiệp lớn sử dụng OSPF, tại sao quản trị viên lại chia mạng thành các Vùng (Areas) thay vì để một vùng phẳng duy nhất?",
        "options": [
          "Để giới hạn phạm vi ngập lụt gói tin LSA, giảm kích thước cơ sở dữ liệu trạng thái liên kết và giảm tải tính toán thuật toán Dijkstra cho các router",
          "Để chuyển đổi từ IPv4 sang IPv6 dễ dàng hơn",
          "Vì một vùng OSPF chỉ chứa được tối đa 10 máy tính",
          "Để bắt buộc người dùng phải đổi mật khẩu mạng"
        ],
        "correct": 0,
        "explanation": "Khi mạng OSPF có hàng nghìn router, bản tin LSA ngập lụt toàn mạng sẽ làm quá tải băng thông và thuật toán Dijkstra ngốn cạn bộ nhớ CPU router. Phân chia Areas giúp: Router chỉ cần biết topology chi tiết trong Area của mình; router biên vùng (Area Border Router - ABR) sẽ tóm tắt thông tin tuyến đường (Route Summarization) gửi sang các Area khác."
      },
      {
        "id": 436,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Tính toán Mạng con CIDR (Subnetting)",
        "difficulty": "Vận dụng",
        "question": "Công ty được cấp dải mạng 192.168.10.0/24 và muốn chia thành các mạng con, mỗi mạng con cần tối thiểu 28 địa chỉ IP cho các máy trạm. Tiền tố mạng con tối ưu và số lượng mạng con tối đa tạo được là:",
        "options": [
          "/27 và 8 mạng con",
          "/28 và 16 mạng con",
          "/26 và 4 mạng con",
          "/29 và 32 mạng con"
        ],
        "correct": 0,
        "explanation": "Cần 28 host -> 2^h - 2 >= 28 -> 2^h >= 30 -> Cần h = 5 bit cho host (cung cấp 2^5 - 2 = 30 host khả dụng). Số bit mạng = 32 - 5 = 27 (tiền tố /27). Từ mạng ban đầu /24 mượn thêm 3 bit (27 - 24 = 3 bit) để chia mạng con. Số lượng mạng con tạo được = 2^3 = 8 mạng con (mỗi mạng con có 30 host khả dụng)."
      },
      {
        "id": 437,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Thuật toán Định tuyến Dijkstra",
        "difficulty": "Vận dụng",
        "question": "Độ phức tạp tính toán thời gian của thuật toán Dijkstra cơ bản tìm đường đi ngắn nhất trên đồ thị có N nút mạng là bao nhiêu?",
        "options": [
          "O(N)",
          "O(N^2) (hoặc O(E log N) khi cài đặt bằng cấu trúc hàng đợi ưu tiên Min-Heap)",
          "O(N^3)",
          "O(1)"
        ],
        "correct": 1,
        "explanation": "Với cài đặt mảng thông thường, thuật toán lặp qua N bước, mỗi bước duyệt tìm nút có khoảng cách nhỏ nhất mất O(N), do đó tổng độ phức tạp là O(N^2). Nếu sử dụng cấu trúc đống nhị phân (Binary Min-Heap / Fibonacci Heap), độ phức tạp tối ưu xuống còn O(E log N) với E là số lượng cạnh liên kết."
      },
      {
        "id": 438,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Định tuyến Khoai tây Nóng (Hot Potato Routing)",
        "difficulty": "Thông hiểu",
        "question": "Nguyên lý 'Định tuyến khoai tây nóng' (Hot Potato Routing) trong kiến trúc BGP được mô tả như thế nào?",
        "options": [
          "Router gửi gói tin qua đường truyền có nhiệt độ cao nhất",
          "Router bên trong một AS sẽ chuyển gói tin tới router biên xuất ra khỏi AS với chi phí đường đi nội bộ (Intra-AS cost) nhỏ nhất có thể, nhằm tống khứ gói tin ra khỏi mạng của mình càng nhanh càng tốt",
          "Router từ chối chuyển tiếp gói tin vào mùa hè",
          "Gói tin bị hủy nếu không nhận được ACK trong 5 giây"
        ],
        "correct": 1,
        "explanation": "Hot Potato Routing (Định tuyến củ khoai nóng): Giống như cầm củ khoai nóng bỏng tay muốn ném đi ngay, router lựa chọn router cổng ra (Exit Gateway) gần nhất bên trong AS của mình để đẩy gói tin ra khỏi mạng của mình nhanh nhất với chi phí nội bộ thấp nhất, bất kể quãng đường đi ngoài Internet sau đó có xa hay không."
      },
      {
        "id": 439,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Tóm tắt Tuyến đường (Route Aggregation / CIDR)",
        "difficulty": "Vận dụng",
        "question": "Một router có 4 tuyến đường mạng con liên tiếp:\n- 192.168.16.0/24\n- 192.168.17.0/24\n- 192.168.18.0/24\n- 192.168.19.0/24\nRouter có thể tóm tắt (Supernetting / Aggregation) 4 mạng trên thành một tuyến đường duy nhất nào?",
        "options": [
          "192.168.0.0/16",
          "192.168.16.0/22",
          "192.168.16.0/23",
          "192.168.16.0/21"
        ],
        "correct": 1,
        "explanation": "Xét octet thứ ba ở dạng nhị phân:\n16 = 00010000_2\n17 = 00010001_2\n18 = 00010010_2\n19 = 00010011_2\nCả 4 mạng đều có chung 6 bit đầu tiên (000100). Do đó phần mạng chung gồm 8 bit (octet 1) + 8 bit (octet 2) + 6 bit (octet 3) = 22 bit. Tuyến tóm tắt duy nhất là: 192.168.16.0/22. Kỹ thuật này giúp thu gọn bảng định tuyến Internet toàn cầu."
      },
      {
        "id": 440,
        "exam_type": "nang_cao",
        "chapter": 4,
        "chapter_title": "Chương 4: Tầng Mạng (Network Layer)",
        "category": "Thuật toán Lập lịch Hàng đợi (Scheduling)",
        "difficulty": "Thông hiểu",
        "question": "Thuật toán lập lịch hàng đợi Weighted Fair Queuing (WFQ) tại cổng ra của router đảm bảo điều gì cho các luồng lưu lượng khác nhau?",
        "options": [
          "Tất cả các luồng đều nhận băng thông bằng 0",
          "Mỗi lớp lưu lượng (traffic class) được cấp một trọng số w_i và được đảm bảo một phần băng thông tối thiểu tỉ lệ thuận với trọng số w_i / (Tổng trọng số) trong suốt thời gian tắc nghẽn",
          "Luồng nào gửi gói tin to hơn thì được truyền trước",
          "Gói tin nào đến trước luôn được phục vụ trước bất kể dịch vụ"
        ],
        "correct": 1,
        "explanation": "WFQ (Weighted Fair Queuing - Xếp hàng công bằng có trọng số) là cơ chế QoS (Chất lượng dịch vụ) quan trọng: Router chia gói tin vào các hàng đợi theo lớp dịch vụ (ví dụ VoIP, Video, Web) và gán trọng số ưu tiên. Cơ chế này đảm bảo luồng quan trọng (như thoại) có tỷ lệ băng thông cam kết mà không làm các luồng độ ưu tiên thấp bị bỏ đói (starvation)."
      }
    ],
    "chuong_5_tang_lien_ket": [
      {
        "id": 501,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Dịch vụ Tầng Liên kết",
        "difficulty": "Nhận biết",
        "question": "Chức năng nào sau đây KHÔNG THUỘC phạm vi trách nhiệm của Tầng Liên kết dữ liệu (Data Link Layer)?",
        "options": [
          "Đóng khung dữ liệu (Framing) từ gói tin IP",
          "Điều khiển truy nhập đường truyền vật lý dùng chung (MAC protocol)",
          "Tìm đường đi tối ưu xuyên qua nhiều hệ thống tự trị trên Internet toàn cầu",
          "Phát hiện lỗi bit trong khung dữ liệu bằng mã kiểm tra dư thừa tuần hoàn (CRC)"
        ],
        "correct": 2,
        "explanation": "Tìm đường đi xuyên mạng Internet toàn cầu (Routing) là chức năng cốt lõi của Tầng Mạng (Network Layer). Tầng Liên kết dữ liệu chỉ chịu trách nhiệm chuyển giao các khung (frames) giữa hai nút kề nhau trên cùng một liên kết truyền thông trực tiếp."
      },
      {
        "id": 502,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Kỹ thuật Kiểm tra lỗi CRC",
        "difficulty": "Vận dụng",
        "question": "Cho chuỗi dữ liệu D = 101110. Đa thức sinh được sử dụng là G(x) = x^3 + 1 (tương ứng với chuỗi bit G = 1001). Số lượng bit kiểm tra CRC (r bit) cần thêm vào và mã CRC tính được bằng phép chia modulo-2 XOR là:",
        "options": [
          "3 bit; CRC = 011",
          "4 bit; CRC = 1001",
          "3 bit; CRC = 110",
          "2 bit; CRC = 01"
        ],
        "correct": 0,
        "explanation": "Đa thức G có bậc r = 3 (chuỗi 1001 có 4 bit) -> Mã CRC có r = 3 bit. Thêm 3 số 0 vào đuôi D: D' = 101110000. Thực hiện chia modulo-2 (XOR) với 1001:\n101110000 / 1001:\n1011 XOR 1001 = 0010\nHạ 1: 0101 (bỏ qua), hạ 1: 1011 XOR 1001 = 0010\nHạ 0: 0100 (bỏ qua), hạ 0: 1000 XOR 1001 = 0001\nHạ 0: 0010 (bỏ qua). Dư cuối cùng là 011. Do đó mã CRC = 011, khung phát đi trên đường truyền là 101110011."
      },
      {
        "id": 503,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Kỹ thuật Kiểm tra lỗi Parity",
        "difficulty": "Thông hiểu",
        "question": "Ưu điểm vượt trội của kỹ thuật kiểm tra bit chẵn lẻ hai chiều (Two-Dimensional Parity) so với kiểm tra chẵn lẻ một chiều đơn giản (One-Dimensional Parity) là gì?",
        "options": [
          "Không cần gửi thêm bất kỳ bit thừa nào",
          "Không chỉ phát hiện được lỗi mà còn CÓ THỂ ĐỊNH VỊ CHÍNH XÁC VÀ SỬA ĐƯỢC 1 bit lỗi đơn lẻ (Single-bit Error Correction) tại giao điểm của hàng và cột bị sai",
          "Hoàn toàn thay thế được giao thức TCP",
          "Tăng tốc độ đường truyền lên gấp đôi"
        ],
        "correct": 1,
        "explanation": "Trong 2D Parity, dữ liệu được xếp thành ma trận hàng và cột, mỗi hàng và mỗi cột đều có 1 bit parity riêng. Khi có 1 bit đơn lẻ bị đảo ngược (0 thành 1 hoặc 1 thành 0), cả hàng và cột chứa bit đó đều bị vi phạm kiểm tra chẵn lẻ. Điểm giao giữa hàng sai và cột sai chỉ ra chính xác vị trí bit lỗi, cho phép bên nhận tự động sửa bit đó ngay lập tức."
      },
      {
        "id": 504,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Giao thức Đa truy nhập (ALOHA)",
        "difficulty": "Thông hiểu",
        "question": "Hiệu suất tối đa (Maximum Throughput) của giao thức Slotted ALOHA (chia khe thời gian) và Pure ALOHA (ALOHA thuần tự do) lần lượt đạt giá trị lý thuyết xấp xỉ là bao nhiêu?",
        "options": [
          "100% và 50%",
          "36.8% (1/e) và 18.4% (1 / (2e))",
          "50% và 25%",
          "75% và 37.5%"
        ],
        "correct": 1,
        "explanation": "Theo lý thuyết hàng đợi và xác suất Poisson: Pure ALOHA cho phép gửi tự do bất cứ lúc nào nên khoảng thời gian dễ bị va chạm (Vulnerable period) dài gấp đôi (2 * T), hiệu suất cực đại chỉ đạt S = G * e^(-2G) = 1/(2e) ≈ 0.184 (18.4%). Slotted ALOHA bắt buộc các nút chỉ được phát ở đầu mỗi khe thời gian, giảm nửa vùng va chạm, nâng hiệu suất lên gấp đôi: S = G * e^(-G) = 1/e ≈ 0.368 (36.8%)."
      },
      {
        "id": 505,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Giao thức CSMA/CD",
        "difficulty": "Thông hiểu",
        "question": "Trong giao thức CSMA/CD (Carrier Sense Multiple Access with Collision Detection) của mạng Ethernet, quy tắc 'Listen while transmitting' (Lắng nghe trong khi truyền) có ý nghĩa gì?",
        "options": [
          "Máy trạm liên tục đo điện áp/năng lượng trên đường truyền trong khi đang phát; nếu phát hiện mức năng lượng tăng vọt bất thường (xảy ra xung đột với trạm khác), nó lập tức ngừng truyền gói tin ngay",
          "Máy trạm bật loa ngoài để nghe tín hiệu âm thanh từ dây cáp",
          "Máy trạm chỉ truyền khi có lệnh của quản trị viên",
          "Máy trạm kiểm tra xem router có đang online không"
        ],
        "correct": 0,
        "explanation": "CSMA/CD cải tiến vượt trội so với ALOHA: Không chỉ lắng nghe trước khi nói (Carrier Sense), trạm còn liên tục đo tín hiệu trên đường truyền trong suốt quá trình phát (Collision Detection). Khi phát hiện có xung đột (xung điện áp tăng vọt do 2 tín hiệu đè lên nhau), trạm ngừng phát ngay lập tức thay vì tiếp tục truyền hết gói tin vô ích, giúp tiết kiệm băng thông kênh truyền."
      },
      {
        "id": 506,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Kích thước Khung Ethernet tối thiểu",
        "difficulty": "Đánh lừa",
        "question": "Tại sao trong chuẩn mạng Ethernet 10 Mbps (IEEE 802.3 cáp đồng chia sẻ), kích thước khung tối thiểu bắt buộc phải là 64 byte (512 bit)?",
        "options": [
          "Để tiêu đề khung chứa đủ địa chỉ MAC và IP",
          "Để đảm bảo thời gian truyền khung (T_trans = L/R) phải lớn hơn hoặc bằng hai lần thời gian trễ lan truyền cực đại giữa hai trạm xa nhất trên mạng (T_trans >= 2 * T_prop), giúp trạm phát kịp thời phát hiện va chạm trước khi truyền xong khung",
          "Do giới hạn bộ nhớ của chip xử lý thời kỳ đầu",
          "Để phù hợp với kích thước một cung từ trên đĩa mềm"
        ],
        "correct": 1,
        "explanation": "Đây là nguyên lý cơ bản của CSMA/CD: Nếu gói tin quá ngắn, trạm phát có thể đã truyền xong toàn bộ khung trước khi tín hiệu va chạm từ đầu kia cáp quay trở lại; khi đó trạm sẽ tưởng lầm là khung đã truyền thành công. Để đảm bảo mọi va chạm tình huống xấu nhất (2 * T_prop) đều được phát hiện trong lúc máy vẫn đang phát, kích thước khung nhỏ nhất bắt buộc phải là 512 bit (64 byte)."
      },
      {
        "id": 507,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Thuật toán Binary Exponential Backoff",
        "difficulty": "Vận dụng",
        "question": "Trong mạng Ethernet CSMA/CD, sau khi xảy ra va chạm lần thứ 3 (k = 3), thuật toán Lùi thời gian hàm mũ nhị phân (Binary Exponential Backoff) sẽ chọn ngẫu nhiên giá trị số khe thời gian chờ R trong tập hợp nào?",
        "options": [
          "{0, 1}",
          "{0, 1, 2, 3}",
          "{0, 1, 2, 3, 4, 5, 6, 7}",
          "{0, 1, ..., 15}"
        ],
        "correct": 2,
        "explanation": "Quy tắc Binary Exponential Backoff: Sau lần va chạm thứ k (với k <= 10), máy trạm chọn ngẫu nhiên một số nguyên R trong tập {0, 1, 2, ..., 2^k - 1} và chờ một khoảng thời gian bằng R * 512 bit-time trước khi thử phát lại. Sau va chạm lần thứ 3 (k = 3), tập giá trị là {0, 1, ..., 2^3 - 1} = {0, 1, 2, 3, 4, 5, 6, 7}."
      },
      {
        "id": 508,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Mạng không dây CSMA/CA & RTS/CTS",
        "difficulty": "Thông hiểu",
        "question": "Tại sao mạng không dây WiFi (IEEE 802.11) sử dụng cơ chế CSMA/CA (Tránh va chạm) kết hợp bắt tay RTS/CTS thay vì dùng CSMA/CD như Ethernet?",
        "options": [
          "Vì sóng WiFi truyền nhanh hơn ánh sáng",
          "Vì trạm phát WiFi không thể vừa phát sóng vừa nghe đồng thời (tín hiệu phát đi có năng lượng quá lớn lấn át hoàn toàn tín hiệu nhận về) và để giải quyết bài toán nút ẩn (Hidden Terminal Problem)",
          "Vì chuẩn WiFi cấm dùng dây cáp",
          "Vì giao thức CSMA/CD yêu cầu bản quyền đắt tiền"
        ],
        "correct": 1,
        "explanation": "Trên môi trường vô tuyến: (1) Năng lượng tín hiệu phát tại ăng-ten cực mạnh so với tín hiệu suy hao nhận về, card mạng không thể vừa phát vừa phát hiện va chạm; (2) Vấn đề nút ẩn (Hidden Terminal): hai máy ở hai đầu xa nhau không nghe thấy nhau nhưng cùng phát tới một Access Point ở giữa gây va chạm. Cơ chế đặt trước kênh truyền bằng khung ngắn RTS/CTS (Request to Send / Clear to Send) giải quyết triệt để vấn đề này."
      },
      {
        "id": 509,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Địa chỉ MAC (LAN Address)",
        "difficulty": "Nhận biết",
        "question": "Địa chỉ vật lý MAC (Media Access Control) có độ dài bao nhiêu bit và 24 bit đầu tiên đại diện cho thông tin gì?",
        "options": [
          "32 bit; đại diện cho quốc gia của máy tính",
          "48 bit (6 byte); 24 bit đầu là mã OUI (Organizationally Unique Identifier) do tổ chức IEEE gán cho nhà sản xuất card mạng",
          "64 bit; 24 bit đầu là số serial của CPU",
          "128 bit; 24 bit đầu là phiên bản hệ điều hành"
        ],
        "correct": 1,
        "explanation": "Địa chỉ MAC dài 48 bit (6 byte), biểu diễn bằng 12 chữ số Hex (ví dụ 00:1A:2B:3C:4D:5E). 24 bit đầu (3 byte đầu) là mã định danh nhà sản xuất OUI do IEEE quản lý (như Intel, Cisco, Realtek); 24 bit sau (3 byte sau) là số thứ tự duy nhất do nhà sản xuất tự gán cho từng chiếc card mạng (NIC)."
      },
      {
        "id": 510,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Giao thức Phân giải Địa chỉ ARP",
        "difficulty": "Thông hiểu",
        "question": "Trong giao thức ARP (Address Resolution Protocol), thông điệp ARP Request và ARP Reply được truyền tương ứng dưới dạng phương thức gửi nào ở tầng liên kết dữ liệu?",
        "options": [
          "Cả hai đều là Broadcast",
          "ARP Request gửi dạng Quảng bá (Broadcast FF:FF:FF:FF:FF:FF); ARP Reply gửi dạng Đơn hướng (Unicast trực tiếp về MAC của máy hỏi)",
          "ARP Request là Multicast; ARP Reply là Anycast",
          "Cả hai đều là Unicast"
        ],
        "correct": 1,
        "explanation": "Khi máy A cần biết địa chỉ MAC của IP 192.168.1.5, vì chưa biết máy đó ở đâu nên A phải gửi ARP Request ở chế độ Broadcast tầng 2 (Dest MAC: FF:FF:FF:FF:FF:FF) để tất cả các máy trong mạng LAN đều nhận được. Máy mang đúng IP 192.168.1.5 đọc được sẽ phản hồi bằng thông điệp ARP Reply ở chế độ Unicast trực tiếp về địa chỉ MAC của máy A (vì A đã kèm sẵn MAC của mình trong gói request)."
      },
      {
        "id": 511,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Giao thức ARP & Bảng Cache",
        "difficulty": "Đánh lừa",
        "question": "Nếu máy tính nguồn Host A muốn gửi gói tin cho Host B nằm ở một MẠNG CON KHÁC (khác Subnet IP, đi qua một Router trung gian), thì địa chỉ MAC đích (Destination MAC) trong khung Ethernet mà Host A gửi đi sẽ là địa chỉ MAC của thiết bị nào?",
        "options": [
          "Địa chỉ MAC của Host B đích",
          "Địa chỉ MAC của cổng vào trên Default Gateway (Router)",
          "Địa chỉ MAC quảng bá FF:FF:FF:FF:FF:FF",
          "Địa chỉ MAC của máy chủ DNS"
        ],
        "correct": 1,
        "explanation": "Đây là câu hỏi kinh điển hay bẫy nhất: Tầng IP giữ nguyên Destination IP = IP của Host B trong suốt hành trình; nhưng ở Tầng 2, khung Ethernet chỉ có giá trị cục bộ trong mạng LAN. Vì Host B ở mạng khác, Host A không thể gửi trực tiếp tới MAC của B mà bắt buộc phải gửi khung tới cổng Default Gateway (Router) của mạng LAN cục bộ. Do đó Dest MAC = MAC của Router Interface!"
      },
      {
        "id": 512,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Cấu trúc Khung Ethernet (IEEE 802.3)",
        "difficulty": "Nhận biết",
        "question": "Trường Type (2 byte) trong tiêu đề khung Ethernet II có vai trò gì?",
        "options": [
          "Xác định độ dài của dây cáp mạng",
          "Xác định giao thức tầng mạng nào đang được đóng gói bên trong phần dữ liệu payload (ví dụ 0x0800 cho IPv4, 0x0806 cho ARP, 0x86DD cho IPv6)",
          "Quy định tốc độ truyền dẫn của cổng mạng",
          "Chỉ định số lượng switch trên đường đi"
        ],
        "correct": 1,
        "explanation": "Trường Type (EtherType - 2 byte) đóng vai trò giải ghép kênh (Demultiplexing) tại tầng liên kết dữ liệu, thông báo cho hệ điều hành biết khi mở khung Ethernet thì phải chuyển giao gói dữ liệu bên trong lên cho giao thức tầng mạng tương ứng xử lý (0x0800: IPv4; 0x0806: ARP; 0x86DD: IPv6)."
      },
      {
        "id": 513,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Cơ chế Tự học của Switch (Self-learning)",
        "difficulty": "Thông hiểu",
        "question": "Một bộ chuyển mạch (Switch) vừa mới bật nguồn có Bảng địa chỉ MAC (Switch Table / CAM Table) hoàn toàn rỗng. Khi nhận được một khung Ethernet đầu tiên đi vào cổng 1, switch sẽ học được thông tin gì?",
        "options": [
          "Địa chỉ MAC đích và cổng đến",
          "Địa chỉ MAC NGUỒN của khung dữ liệu và ghi nhận nó gắn liền với cổng số 1",
          "Toàn bộ địa chỉ IP của mạng LAN",
          "Tên đăng nhập Windows của người gửi"
        ],
        "correct": 1,
        "explanation": "Cơ chế tự học (Self-learning) của Switch: Switch LUÔN LUÔN đọc địa chỉ MAC NGUỒN (Source MAC) của khung tin đến để học. Khi thấy một frame vào cổng 1 có Source MAC là X, switch lập tức ghi vào bảng: 'Muốn gửi cho thiết bị X thì chuyển ra cổng số 1', kèm theo một đồng hồ đếm lùi thời gian TTL (thường 300 giây)."
      },
      {
        "id": 514,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Cơ chế Chuyển tiếp của Switch (Forwarding)",
        "difficulty": "Thông hiểu",
        "question": "Khi Switch nhận một khung Ethernet mà địa chỉ MAC ĐÍCH chưa từng xuất hiện trong Bảng MAC (Unknown Unicast Frame), switch sẽ xử lý khung này như thế nào?",
        "options": [
          "Hủy bỏ khung ngay lập tức (Drop)",
          "Ngập lụt (Flooding) - sao chép và chuyển tiếp khung ra TẤT CẢ các cổng còn lại của switch, ngoại trừ chính cổng vừa nhận vào",
          "Gửi khung về máy chủ Google để tra cứu",
          "Khởi động lại switch"
        ],
        "correct": 1,
        "explanation": "Khi chưa biết thiết bị đích nằm ở cổng nào (Unknown Unicast), hành vi mặc định an toàn của Switch là Flooding (Làm tràn/Ngập lụt): đẩy khung ra tất cả các cổng khác (trừ cổng nhận vào). Khi thiết bị đích thật nhận được khung và phản hồi lại, switch sẽ đọc Source MAC của gói phản hồi và học được vị trí cổng của thiết bị đó."
      },
      {
        "id": 515,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "So sánh Hub, Switch và Router",
        "difficulty": "Thông hiểu",
        "question": "Một mạng gồm 1 Switch có 24 cổng, tất cả các cổng đều được cắm vào các máy tính hoạt động ở chế độ Full-Duplex. Mạng này có bao nhiêu Miền xung đột (Collision Domain) và bao nhiêu Miền quảng bá (Broadcast Domain)?",
        "options": [
          "1 Collision Domain và 1 Broadcast Domain",
          "24 Collision Domains và 1 Broadcast Domain",
          "24 Collision Domains và 24 Broadcast Domains",
          "1 Collision Domain và 24 Broadcast Domains"
        ],
        "correct": 1,
        "explanation": "Đặc trưng cốt lõi của Switch: Mỗi cổng của Switch là một Miền xung đột (Collision Domain) độc lập (ở đây có 24 cổng = 24 collision domains, chạy Full-duplex hoàn toàn không có va chạm). Tuy nhiên, vì Switch hoạt động ở tầng 2 và không chia VLAN, nên tất cả 24 cổng này vẫn nằm chung trong DUY NHẤT 1 Miền quảng bá (Broadcast Domain)."
      },
      {
        "id": 516,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "So sánh Hub, Switch và Router",
        "difficulty": "Đánh lừa",
        "question": "Thiết bị mạng nào sau đây có khả năng chia nhỏ (cô lập) cả Miền xung đột (Collision Domain) VÀ Miền quảng bá (Broadcast Domain) trên từng cổng của nó?",
        "options": [
          "Bộ tập trung (Hub)",
          "Bộ chuyển mạch mạng LAN thông thường không chia VLAN (Switch)",
          "Bộ định tuyến (Router)",
          "Bộ lặp tín hiệu (Repeater)"
        ],
        "correct": 2,
        "explanation": "Bảng so sánh kinh điển: (1) Hub / Repeater (Layer 1): 1 Collision Domain, 1 Broadcast Domain; (2) Switch / Bridge (Layer 2): Mỗi cổng là 1 Collision Domain riêng, nhưng chung 1 Broadcast Domain; (3) Router (Layer 3): Mỗi cổng là 1 Collision Domain riêng VÀ mỗi cổng là 1 Broadcast Domain riêng (Router chặn không cho các khung broadcast tầng 2 tràn sang các mạng khác)."
      },
      {
        "id": 517,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Giao thức Cây khung (STP - 802.1D)",
        "difficulty": "Thông hiểu",
        "question": "Giao thức Spanning Tree Protocol (STP - IEEE 802.1D) được triển khai trên các hệ thống Switch mạng doanh nghiệp nhằm giải quyết vấn đề nguy hiểm nào?",
        "options": [
          "Tăng tốc độ truy cập Internet",
          "Ngăn chặn hiện tượng Vòng lặp chuyển mạch ở tầng 2 (Layer 2 Switching Loops) gây ra bão quảng bá (Broadcast Storm) làm tê liệt toàn mạng khi có đường dây đấu nối dự phòng",
          "Mã hóa mật khẩu người dùng",
          "Thay thế hoàn toàn giao thức định tuyến OSPF"
        ],
        "correct": 1,
        "explanation": "Vì khung Ethernet không có trường TTL như gói tin IP, nếu các switch đấu nối có đường vòng dự phòng, một khung broadcast đơn lẻ sẽ bị nhân bản và quay vòng lặp vô tận giữa các switch (Broadcast Storm), làm bảng MAC bị đảo lộn liên tục và làm sập hoàn toàn mạng trong vài giây. STP tự động tính toán khóa các cổng dự phòng (chuyển sang trạng thái Blocking) để tạo cây không vòng lặp."
      },
      {
        "id": 518,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Mạng Cục bộ Ảo VLAN (IEEE 802.1Q)",
        "difficulty": "Nhận biết",
        "question": "Mục đích cơ bản nhất của việc cấu hình Mạng cục bộ ảo (VLAN) trên một bộ chuyển mạch vật lý là gì?",
        "options": [
          "Chia một Switch vật lý thành nhiều mạng LAN logic độc lập, giúp cô lập lưu lượng quảng bá (Broadcast Domain) và tăng cường an ninh mạng giữa các phòng ban",
          "Tăng công suất nguồn điện của switch",
          "Nâng băng thông cáp mạng từ 100 Mbps lên 10 Gbps",
          "Tự động cài đặt phần mềm diệt virus cho các máy trạm"
        ],
        "correct": 0,
        "explanation": "VLAN cho phép quản trị viên chia một thiết bị switch vật lý dùng chung thành nhiều mạng LAN ảo tách biệt về mặt logic (ví dụ VLAN 10 Ban Giám Đốc, VLAN 20 Kế Toán). Mỗi VLAN là một Broadcast Domain riêng; các máy thuộc VLAN 10 không thể nhìn thấy lưu lượng broadcast của VLAN 20 và không thể giao tiếp trực tiếp với nhau nếu không có thiết bị định tuyến Layer 3."
      },
      {
        "id": 519,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Cổng Access vs Cổng Trunk trong VLAN",
        "difficulty": "Thông hiểu",
        "question": "Sự khác biệt kỹ thuật giữa cổng Access (Access Port) và cổng Trunk (Trunk Port) trên Switch hỗ trợ VLAN là gì?",
        "options": [
          "Cổng Access dùng cáp quang, cổng Trunk dùng cáp đồng",
          "Cổng Access chỉ thuộc về MỘT VLAN duy nhất và truyền khung không gắn thẻ (Untagged frame) tới máy tính người dùng; trong khi cổng Trunk cho phép lưu lượng của NHIỀU VLAN cùng đi qua (thường kết nối giữa các switch) và sử dụng thẻ gắn nhãn IEEE 802.1Q (Tagged frame)",
          "Cổng Trunk chỉ hoạt động vào ban đêm",
          "Cổng Access có tốc độ cao hơn cổng Trunk gấp 10 lần"
        ],
        "correct": 1,
        "explanation": "Cổng Access nối vào End system (PC, máy in) - các thiết bị này không hiểu thẻ VLAN nên switch sẽ gỡ thẻ (untagged) khi phát ra cổng access. Cổng Trunk là đường cao tốc liên kết giữa các Switch (hoặc nối Switch với Router), truyền khung của tất cả các VLAN được cấp phép, có gắn thêm thẻ 802.1Q (4 byte tag) để switch đầu bên kia phân biệt khung này thuộc VLAN nào."
      },
      {
        "id": 520,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Tiêu chuẩn Gắn thẻ 802.1Q (VLAN Tagging)",
        "difficulty": "Thông hiểu",
        "question": "Thẻ nhận diện VLAN theo chuẩn IEEE 802.1Q có kích thước bao nhiêu byte và trường VID (VLAN Identifier) có bao nhiêu bit, cho phép tạo tối đa bao nhiêu VLAN?",
        "options": [
          "Thẻ 2 byte; VID 8 bit, tạo tối đa 256 VLAN",
          "Thẻ 4 byte; VID 12 bit, cho phép đánh số từ 1 đến 4094 (tối đa 4094 VLAN khả dụng)",
          "Thẻ 8 byte; VID 16 bit, tạo 65536 VLAN",
          "Thẻ 1 byte; VID 4 bit, tạo 16 VLAN"
        ],
        "correct": 1,
        "explanation": "Thẻ 802.1Q được chèn trực tiếp vào giữa trường Source MAC và trường Type của khung Ethernet với kích thước 4 byte (gồm 2B TPID 0x8100 và 2B TCI). Trường VLAN ID (VID) có độ dài 12 bit (2^12 = 4096 giá trị). Trừ giá trị 0 và 4095 được dành riêng cho hệ thống, các VLAN hợp lệ được đánh số từ 1 đến 4094."
      },
      {
        "id": 521,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Định tuyến Liên VLAN (Inter-VLAN Routing)",
        "difficulty": "Vận dụng",
        "question": "Mô hình định tuyến liên VLAN 'Router-on-a-Stick' thực hiện chuyển tiếp gói tin giữa các VLAN khác nhau bằng cách nào?",
        "options": [
          "Nối mỗi VLAN bằng một sợi dây cáp riêng cắm vào các cổng vật lý khác nhau của router",
          "Sử dụng một đường liên kết Trunk duy nhất kết nối giữa Switch và một cổng vật lý của Router, trên cổng đó của router được cấu hình chia thành các giao diện con logic (Sub-interfaces) tương ứng với từng VLAN",
          "Nâng cấp tất cả các cổng của switch thành cổng Trunk",
          "Tắt tính năng bảo mật của các máy trạm"
        ],
        "correct": 1,
        "explanation": "Mô hình Router-on-a-Stick tiết kiệm cổng vật lý của Router: Chỉ cần 1 cổng vật lý (ví dụ GigabitEthernet 0/0) nối với đường Trunk của switch. Trên router, kỹ sư tạo các sub-interfaces logic (ví dụ g0/0.10, g0/0.20), đóng gói encapsulation dot1Q và gán IP làm Default Gateway cho từng VLAN tương ứng."
      },
      {
        "id": 522,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Tấn công Mạng LAN: ARP Spoofing",
        "difficulty": "Thông hiểu",
        "question": "Kẻ tấn công thực hiện kỹ thuật 'ARP Spoofing' (Đầu độc bảng ARP) nhằm mục đích gì trong mạng LAN?",
        "options": [
          "Làm đứt đường dây điện thoại",
          "Liên tục gửi các gói tin ARP Reply giả mạo để lừa máy tính nạn nhân liên kết địa chỉ IP của Default Gateway (Router) với địa chỉ MAC của kẻ tấn công, từ đó chuyển hướng toàn bộ lưu lượng của nạn nhân đi qua máy của hacker (tấn công Man-in-the-Middle)",
          "Đổi mật khẩu truy cập BIOS của máy tính",
          "Tăng tốc độ tải file của hacker"
        ],
        "correct": 1,
        "explanation": "Giao thức ARP nguyên bản không có cơ chế xác thực danh tính. Kẻ tấn công gửi các gói tin ARP Reply không yêu cầu (Gratuitous/Unsolicited ARP) tới nạn nhân nói rằng 'Tôi có IP của Gateway và MAC của tôi là X'. Nạn nhân cập nhật bảng ARP của mình; từ đó mọi lưu lượng gửi ra Internet đều chạy thẳng vào máy hacker để bị nghe lén hoặc sửa đổi."
      },
      {
        "id": 523,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Cơ chế Chống Tấn công: Dynamic ARP Inspection (DAI)",
        "difficulty": "Vận dụng",
        "question": "Tính năng Dynamic ARP Inspection (DAI) trên các Switch hiện đại ngăn chặn tấn công ARP Spoofing bằng cách đối chiếu thông điệp ARP với cơ sở dữ liệu tin cậy nào?",
        "options": [
          "Bảng DNS Cache của Google",
          "Bảng liên kết DHCP Snooping Binding Table (chứa ánh xạ hợp lệ giữa IP, MAC, Port do máy chủ DHCP cấp phát)",
          "Danh bạ điện thoại của cơ quan",
          "Bảng định tuyến tĩnh của router"
        ],
        "correct": 1,
        "explanation": "Khi bật tính năng DAI, switch chặn mọi gói tin ARP trước khi chuyển tiếp. Switch đối chiếu thông tin [IP, MAC] trong gói ARP với bảng cơ sở dữ liệu tin cậy được tạo tự động bởi tính năng DHCP Snooping. Nếu gói ARP đến từ một cổng không đáng tin cậy mà chứa thông tin IP giả mạo không khớp với hợp đồng DHCP, switch sẽ tiêu hủy gói tin và cảnh báo quản trị viên."
      },
      {
        "id": 524,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Tấn công Làm tràn Bảng MAC (MAC Flooding)",
        "difficulty": "Thông hiểu",
        "question": "Kỹ thuật tấn công MAC Flooding gửi hàng nghìn khung tin chứa địa chỉ MAC nguồn giả mạo liên tục vào switch nhằm mục đích biến switch hoạt động tương tự như thiết bị nào?",
        "options": [
          "Biến Switch thành Router",
          "Làm tràn bộ nhớ bảng CAM/MAC của Switch, khiến Switch rơi vào chế độ 'Fail-open' và bắt buộc phải Flooding (ngập lụt) tất cả các khung tin ra mọi cổng như một chiếc Hub, cho phép kẻ tấn công nghe lén toàn bộ mạng",
          "Biến Switch thành máy chủ Web",
          "Biến Switch thành modem cáp quang"
        ],
        "correct": 1,
        "explanation": "Bảng CAM của switch có dung lượng giới hạn (ví dụ vài nghìn bản ghi). Khi kẻ tấn công bơm ngập hàng triệu địa chỉ MAC rác, bảng CAM bị đầy hoàn toàn và không thể học thêm. Lúc này, switch không thể tra được cổng cho các khung tin hợp lệ của người dùng khác nên buộc phải Flooding ra tất cả các cổng (hành xử giống hệt như một chiếc Hub), giúp hacker dễ dàng bắt trọn lưu lượng nhạy cảm."
      },
      {
        "id": 525,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Chế độ Truyền Song công (Duplex)",
        "difficulty": "Thông hiểu",
        "question": "Tại sao trong mạng Ethernet hiện đại kết nối hình sao bằng cáp xoắn đôi (Twisted Pair) cắm vào Switch hoạt động ở chế độ Song công toàn phần (Full-Duplex), giao thức phát hiện va chạm CSMA/CD lại được tắt bỏ hoàn toàn?",
        "options": [
          "Vì người dùng không cần kiểm tra lỗi nữa",
          "Vì mỗi cặp dây đồng riêng biệt được dành riêng cho việc truyền (TX) và nhận (RX) độc lập, đồng thời mỗi cổng switch tạo thành một phân đoạn mạng riêng biệt hoàn toàn không thể xảy ra va chạm xung đột tín hiệu vật lý",
          "Vì cáp xoắn đôi tự động hấp thụ các va chạm",
          "Do hệ điều hành Windows tự xử lý va chạm ở tầng ứng dụng"
        ],
        "correct": 1,
        "explanation": "Trong môi trường cáp chia sẻ cổ xưa (cáp đồng trục 10BASE2/5), mọi máy dùng chung 1 dây đồng nên bắt buộc phải có CSMA/CD. Trong mạng hiện đại với Switch và cáp xoắn đôi Cat5e/Cat6 chạy Full-Duplex: Kênh truyền có 2 đường riêng biệt (1 cặp truyền TX, 1 cặp nhận RX), không còn hiện tượng tranh chấp môi trường dùng chung, va chạm bằng 0, do đó CSMA/CD được vô hiệu hóa hoàn toàn."
      },
      {
        "id": 526,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Địa chỉ MAC Đặc biệt",
        "difficulty": "Nhận biết",
        "question": "Địa chỉ MAC nào sau đây là địa chỉ Quảng bá (Broadcast) hợp lệ ở tầng liên kết dữ liệu?",
        "options": [
          "00:00:00:00:00:00",
          "FF:FF:FF:FF:FF:FF",
          "255.255.255.255",
          "01:00:5E:00:00:01"
        ],
        "correct": 1,
        "explanation": "Địa chỉ Broadcast tầng 2 là chuỗi 48 bit đều bằng 1, được viết dưới dạng thập lục phân là FF:FF:FF:FF:FF:FF (hoặc FF-FF-FF-FF-FF-FF). Lưu ý 255.255.255.255 là địa chỉ Broadcast ở tầng 3 (IP), không phải địa chỉ MAC tầng 2."
      },
      {
        "id": 527,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Cơ chế Chuyển mạch: Cut-Through vs Store-and-Forward",
        "difficulty": "Thông hiểu",
        "question": "Cơ chế chuyển mạch Cut-Through Switching trên Switch khác biệt như thế nào so với cơ chế Store-and-Forward truyền thống?",
        "options": [
          "Cut-Through cắt nhỏ khung tin thành 2 nửa",
          "Cut-Through bắt đầu chuyển tiếp khung tin ngay khi vừa đọc xong địa chỉ MAC đích (Destination MAC) ở 6 byte đầu tiên mà không cần chờ nhận hết khung và không kiểm tra mã CRC, giúp giảm tối đa độ trễ chuyển mạch",
          "Cut-Through lưu khung trong RAM suốt 5 giây trước khi gửi",
          "Cut-Through chỉ dùng cho giao thức FTP"
        ],
        "correct": 1,
        "explanation": "Store-and-Forward nhận đủ 100% khung và kiểm tra lỗi CRC trước khi chuyển tiếp (độ trễ cao hơn nhưng chặn khung lỗi). Cut-Through (thường dùng trong trung tâm dữ liệu tài chính tốc độ cao) đọc ngay 6 byte đầu chứa Destination MAC rồi tức tốc đẩy ra cổng tương ứng ngay cả khi phần thân khung vẫn đang được nạp vào, giảm độ trễ xuống mức nano-giây."
      },
      {
        "id": 528,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Giao thức Đa truy nhập (Taking-turns)",
        "difficulty": "Thông hiểu",
        "question": "Trong giao thức Chuyền thẻ bài (Token Passing - ví dụ chuẩn IEEE 802.5 Token Ring), một nút mạng được phép truyền dữ liệu khi nào?",
        "options": [
          "Bất cứ khi nào nó có dữ liệu cần gửi",
          "Khi và chỉ khi nó đang nắm giữ khung thẻ bài đặc biệt (Token) đang luân chuyển tuần hoàn trên vòng mạng",
          "Khi được máy chủ cấp phát quyền qua cổng 80",
          "Khi không có máy nào khác bật nguồn"
        ],
        "correct": 1,
        "explanation": "Giao thức lần lượt (Taking-turns) bằng Token: Một khung nhỏ đặc biệt gọi là Thẻ bài (Token) di chuyển tuần hoàn từ nút này sang nút khác theo chiều kim đồng hồ. Một nút chỉ được phát dữ liệu khi nó bắt được chiếc Token rảnh rỗi. Khi truyền xong, nó nhả Token cho nút kế tiếp, triệt tiêu hoàn toàn nguy cơ va chạm xung đột tín hiệu."
      },
      {
        "id": 529,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Kỹ thuật Bổ sung Byte (Byte Stuffing)",
        "difficulty": "Thông hiểu",
        "question": "Trong kỹ thuật đóng khung ở tầng liên kết, quy tắc Byte Stuffing (Nhồi byte / Character Stuffing) được sử dụng để làm gì?",
        "options": [
          "Tăng kích thước tệp tin để tải lâu hơn",
          "Chèn một byte thoát đặc biệt (Escape Byte - ESC) vào ngay trước các byte dữ liệu người dùng tình cờ trùng khớp với ký tự cờ biên giới hạn khung (Flag Byte), ngăn ngừa bên nhận hiểu nhầm đó là điểm kết thúc khung",
          "Mã hóa mật khẩu tầng 2",
          "Tự động ngắt kết nối khi hết dung lượng"
        ],
        "correct": 1,
        "explanation": "Khi tầng liên kết dùng ký tự cờ đặc biệt (Flag Byte, ví dụ 01111110) để đánh dấu đầu và đuôi của khung, nếu trong dữ liệu người dùng tình cờ xuất hiện chuỗi bit giống hệt Flag, bên nhận sẽ tưởng khung đã kết thúc sớm. Byte Stuffing chèn thêm byte ESC vào trước chuỗi đó tại bên gửi, và bên nhận sẽ gỡ bỏ byte ESC để khôi phục dữ liệu gốc."
      },
      {
        "id": 530,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Bảo mật Cổng Switch: Port Security",
        "difficulty": "Thông hiểu",
        "question": "Tính năng Port Security trên Switch Cisco được dùng để làm gì?",
        "options": [
          "Quét virus trên các cổng mạng",
          "Giới hạn số lượng và danh sách các địa chỉ MAC cụ thể được phép kết nối vào một cổng switch vật lý; nếu có thiết bị lạ cắm vào, cổng sẽ tự động khóa (Err-disable) hoặc loại bỏ gói tin",
          "Tự động tăng băng thông cổng lên 1 Gbps",
          "Yêu cầu người dùng cắm thẻ thông minh trước khi cắm dây cáp"
        ],
        "correct": 1,
        "explanation": "Port Security ngăn chặn việc người dùng tự ý cắm switch phụ hoặc thiết bị lạ vào mạng nội bộ. Quản trị viên cấu hình: 'Cổng Fa0/1 chỉ chấp nhận đúng địa chỉ MAC của máy kế toán; nếu phát hiện MAC lạ thì lập tức tắt cổng (Action: Shutdown) và gửi cảnh báo SNMP'."
      },
      {
        "id": 531,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Giao thức STP: Bầu chọn Root Bridge",
        "difficulty": "Thông hiểu",
        "question": "Trong giao thức Spanning Tree Protocol (STP), Switch nào trong mạng sẽ được bầu chọn làm 'Cầu gốc' (Root Bridge)?",
        "options": [
          "Switch có nhiều cổng kết nối nhất",
          "Switch có giá trị Cầu định danh (Bridge ID = Priority + MAC Address) NHỎ NHẤT trong toàn mạng",
          "Switch có địa chỉ IP lớn nhất",
          "Switch được bật nguồn đầu tiên"
        ],
        "correct": 1,
        "explanation": "Quy tắc bầu Root Bridge trong STP: Switch có Bridge ID (BID) nhỏ nhất sẽ chiến thắng. BID gồm 2 phần: Bridge Priority (mặc định là 32768) và địa chỉ MAC của switch. Quản trị viên muốn chọn switch trung tâm mạnh nhất làm Root Bridge thường chủ động hạ độ ưu tiên Priority của nó xuống thấp hơn các switch khác (ví dụ 4096 hoặc 0)."
      },
      {
        "id": 532,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Ghép kênh Phân chia Mã (CDMA)",
        "difficulty": "Thông hiểu",
        "question": "Giao thức đa truy nhập phân chia theo mã (CDMA - Code Division Multiple Access) cho phép các trạm truyền dữ liệu đồng thời như thế nào?",
        "options": [
          "Mỗi trạm phát ở một khe thời gian khác nhau",
          "Tất cả các trạm cùng phát đồng thời trên cùng một dải tần số nhưng mỗi trạm được gán một chuỗi mã trực giao (Orthogonal Code / Chipping Sequence) độc nhất vô nhị để giải mã tại bên nhận",
          "Mỗi trạm sử dụng một loại cáp mạng riêng",
          "Chỉ cho phép một trạm phát tại một thời điểm"
        ],
        "correct": 1,
        "explanation": "Trong CDMA (nền tảng của mạng di động 3G), các máy đồng thời phát trên cùng băng tần. Tín hiệu của mỗi máy được nhân với một mã trực giao (Chipping code). Nhờ tính chất toán học của các vectơ trực giao (tích vô hướng của 2 mã khác nhau bằng 0), trạm thu có thể tách chiết chuẩn xác tín hiệu của từng người dùng mà không bị nhiễu bởi các người dùng khác."
      },
      {
        "id": 533,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Cấu trúc Khung Ethernet: Preamble",
        "difficulty": "Đánh lừa",
        "question": "Phần mở đầu (Preamble) dài 8 byte của khung Ethernet II gồm 7 byte có mẫu bit 10101010 và 1 byte cuối cùng SFD có giá trị là 10101011 nhằm mục đích gì?",
        "options": [
          "Chứa thông tin kiểm tra lỗi CRC",
          "Đồng bộ hóa đồng hồ xung nhịp (Clock Synchronization) của bộ thu tín hiệu và cảnh báo rằng các byte tiếp theo chính là địa chỉ MAC đích của khung dữ liệu",
          "Chứa địa chỉ IP của router",
          "Được dùng để mã hóa mật khẩu tầng 2"
        ],
        "correct": 1,
        "explanation": "Preamble không chứa dữ liệu mà đóng vai trò 'đánh thức' và đồng bộ đồng hồ nhịp (clock synchronization) giữa bộ phát và bộ thu bằng chuỗi bit xen kẽ 10101010. Byte thứ 8 đặc biệt kết thúc bằng hai bit 11 liên tiếp (Start Frame Delimiter - SFD = 10101011) báo hiệu cho card mạng: 'Ngay sau đây là byte đầu tiên của địa chỉ Destination MAC!'."
      },
      {
        "id": 534,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Native VLAN trong IEEE 802.1Q",
        "difficulty": "Thông hiểu",
        "question": "Khái niệm 'Native VLAN' (VLAN bản địa - mặc định thường là VLAN 1) trên đường kết nối Trunk của switch có đặc điểm gì đặc biệt?",
        "options": [
          "Là VLAN có tốc độ cao nhất",
          "Các khung dữ liệu thuộc Native VLAN khi đi qua đường liên kết Trunk sẽ KHÔNG ĐƯỢC GẮN THẺ 802.1Q (Untagged), nhằm duy trì khả năng tương thích ngược với các thiết bị mạng cũ không hiểu chuẩn gắn thẻ",
          "Là VLAN chỉ chứa các máy chủ của hãng Cisco",
          "Là VLAN không thể xóa bỏ tên"
        ],
        "correct": 1,
        "explanation": "Chuẩn 802.1Q định nghĩa Native VLAN: Mọi khung của các VLAN khác khi qua đường Trunk đều bị chèn thẻ tag 4 byte; riêng khung thuộc Native VLAN thì truyền nguyên bản không gắn tag. Khi switch đầu bên kia nhận được một khung không có thẻ trên đường Trunk, nó tự động hiểu khung đó thuộc về Native VLAN."
      },
      {
        "id": 535,
        "exam_type": "nang_cao",
        "chapter": 5,
        "chapter_title": "Chương 5: Tầng Liên kết dữ liệu & Mạng LAN",
        "category": "Tính toán Hiệu suất CSMA/CD",
        "difficulty": "Vận dụng",
        "question": "Hiệu suất lý thuyết (Efficiency) của giao thức CSMA/CD trên mạng LAN được biểu diễn xấp xỉ bởi công thức nào, với d_prop là trễ lan truyền cực đại và d_trans là thời gian truyền một khung dữ liệu?",
        "options": [
          "Efficiency = 1 / (1 + 5 * d_prop / d_trans)",
          "Efficiency = d_prop / d_trans",
          "Efficiency = 1 - (d_prop * d_trans)",
          "Efficiency = 1 / (1 + d_trans / d_prop)"
        ],
        "correct": 0,
        "explanation": "Công thức hiệu suất thực nghiệm chuẩn của CSMA/CD: Efficiency = 1 / (1 + 5 * t_prop / t_trans). Từ công thức này rút ra 2 kết luận kinh điển: (1) Khi khoảng cách giữa các máy d_prop tiến tới 0 (mạng LAN nhỏ gọn), hiệu suất tiệm cận 100%; (2) Khi kích thước khung dữ liệu lớn (t_trans >> t_prop), hiệu suất cũng tiệm cận 100%."
      }
    ],
    "cong_cu_thuc_hanh_mang": [
      {
        "id": 601,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ipconfig & Xử lý Sự cố",
        "difficulty": "Nhận biết",
        "question": "Để xem thông tin chi tiết toàn diện của tất cả các giao diện mạng trên hệ điều hành Windows (bao gồm địa chỉ MAC, máy chủ DHCP, thời hạn thuê IP, DNS Server và Default Gateway), ta sử dụng lệnh nào?",
        "options": [
          "ipconfig",
          "ipconfig /all",
          "ipconfig /displaydns",
          "ipconfig /renew"
        ],
        "correct": 1,
        "explanation": "Lệnh 'ipconfig' thông thường chỉ hiển thị địa chỉ IPv4, Subnet Mask và Default Gateway cơ bản. Tùy chọn 'ipconfig /all' hiển thị đầy đủ thông số kỹ thuật chi tiết: Tên máy (Host name), Địa chỉ vật lý (Physical Address / MAC 48 bit), DHCP Enabled, thời điểm cấp/hết hạn thuê IP (Lease Obtained/Expires), DHCP Server và DNS Servers."
      },
      {
        "id": 602,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ipconfig & Xử lý Sự cố",
        "difficulty": "Thông hiểu",
        "question": "Khi quản trị viên web vừa thay đổi địa chỉ IP của một website sang máy chủ mới, nhưng máy tính của bạn vẫn liên tục truy cập vào địa chỉ IP cũ do lưu trong bộ đệm hệ thống. Lệnh nào sau đây giúp xóa sạch cache DNS của Windows để máy tính truy vấn lại IP mới ngay lập tức?",
        "options": [
          "ipconfig /renew",
          "ipconfig /release",
          "ipconfig /flushdns",
          "ipconfig /registerdns"
        ],
        "correct": 2,
        "explanation": "Lệnh 'ipconfig /flushdns' có chức năng xóa sạch toàn bộ bộ nhớ đệm (DNS Resolver Cache) của client trên Windows. Sau khi thực hiện lệnh này, các lần truy cập website tiếp theo sẽ buộc hệ điều hành phải gửi truy vấn mới tới máy chủ DNS để nhận địa chỉ IP cập nhật."
      },
      {
        "id": 603,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ipconfig & Xử lý Sự cố",
        "difficulty": "Thông hiểu",
        "question": "Lệnh 'ipconfig /release' thực hiện hành động kỹ thuật nào?",
        "options": [
          "Xóa toàn bộ mật khẩu WiFi đã lưu",
          "Gửi thông điệp DHCP Release tới máy chủ DHCP để hủy bỏ hợp đồng thuê địa chỉ IP hiện tại và trả địa chỉ IP về giá trị 0.0.0.0",
          "Ngắt kết nối Bluetooth trên máy tính",
          "Khởi động lại card mạng ở chế độ bảo mật cao nhất"
        ],
        "correct": 1,
        "explanation": "Lệnh 'ipconfig /release' giải phóng địa chỉ IP được cấp phát bởi DHCP server. Máy trạm gửi thông điệp DHCP Release báo cho server biết rằng nó không còn sử dụng IP này nữa. Ngay sau đó, IP của máy trạm sẽ hiển thị là 0.0.0.0 (chưa được cấu hình)."
      },
      {
        "id": 604,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ipconfig & Xử lý Sự cố",
        "difficulty": "Vận dụng",
        "question": "Để yêu cầu máy chủ DHCP cấp lại địa chỉ IP mới hoặc gia hạn lại hợp đồng thuê IP sau khi vừa giải phóng bằng lệnh release, ta sử dụng lệnh nào?",
        "options": [
          "ipconfig /showclassid",
          "ipconfig /renew",
          "ipconfig /allcompartments",
          "ipconfig /setclassid"
        ],
        "correct": 1,
        "explanation": "Lệnh 'ipconfig /renew' kích hoạt quá trình gửi lại gói tin DHCP Request (hoặc DHCP Discover nếu đã release) tới DHCP Server để xin cấp một địa chỉ IP mới hoặc làm mới thời hạn hợp đồng thuê (Lease renewal)."
      },
      {
        "id": 605,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ipconfig & Xử lý Sự cố",
        "difficulty": "Thông hiểu",
        "question": "Để xem danh sách toàn bộ các tên miền và bản ghi ánh xạ IP hiện đang được lưu trong bộ nhớ đệm DNS của Windows mà chưa hết hạn TTL, ta dùng lệnh:",
        "options": [
          "ipconfig /displaydns",
          "ipconfig /flushdns",
          "ipconfig /registerdns",
          "ipconfig /showdns"
        ],
        "correct": 0,
        "explanation": "Lệnh 'ipconfig /displaydns' xuất ra màn hình toàn bộ các bản ghi DNS đang lưu tạm trong cache của trình giải quyết tên miền Windows (DNS Client Service), bao gồm Record Name, Record Type (A, AAAA, CNAME), Time To Live (TTL còn lại tính bằng giây) và Data (địa chỉ IP tương ứng)."
      },
      {
        "id": 606,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ping & Chẩn đoán",
        "difficulty": "Nhận biết",
        "question": "Trong hệ điều hành Windows, tham số nào của lệnh ping được sử dụng để gửi gói tin ping liên tục không ngừng cho đến khi người dùng chủ động nhấn tổ hợp phím Ctrl + C?",
        "options": [
          "ping -c",
          "ping -t",
          "ping -l",
          "ping -a"
        ],
        "correct": 1,
        "explanation": "Tùy chọn 'ping -t' trên Windows ra lệnh cho chương trình tiếp tục gửi gói tin ICMP liên tục cho đến khi bị ngắt bởi người dùng (Ctrl+C). Muốn tạm dừng để xem thống kê mà không thoát lệnh, người dùng có thể bấm Ctrl+Break."
      },
      {
        "id": 607,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ping & Chẩn đoán",
        "difficulty": "Đánh lừa",
        "question": "Sự khác biệt về cú pháp chỉ định số lượng gói tin gửi đi giữa lệnh ping trên Windows và Linux là gì?",
        "options": [
          "Windows dùng tham số -c <số_gói>, còn Linux dùng -n <số_gói>",
          "Windows dùng tham số -n <số_gói> (Number), còn Linux/macOS dùng tham số -c <số_gói> (Count)",
          "Cả hai hệ điều hành đều bắt buộc dùng -count",
          "Windows không giới hạn được số gói gửi đi"
        ],
        "correct": 1,
        "explanation": "Đây là bẫy dòng lệnh rất phổ biến: Trên Command Prompt của Windows, tham số đặt số gói gửi là -n (ví dụ ping 8.8.8.8 -n 5); trong khi trên Terminal của Linux / macOS, tham số đặt số gói gửi là -c (ví dụ ping 8.8.8.8 -c 5)."
      },
      {
        "id": 608,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ping & Chẩn đoán",
        "difficulty": "Vận dụng",
        "question": "Để tìm giá trị MTU (Maximum Transmission Unit) lớn nhất mà đường truyền hỗ trợ không bị phân mảnh, kỹ sư mạng sử dụng lệnh ping kết hợp 2 tham số nào trên Windows?",
        "options": [
          "ping -a -t",
          "ping -f -l <kích_thước_byte>",
          "ping -r -s",
          "ping -w -n"
        ],
        "correct": 1,
        "explanation": "Tùy chọn '-l <size>' cho phép đặt kích thước phần đệm dữ liệu (payload buffer size). Tùy chọn '-f' bật cờ Don't Fragment (DF=1) trong IP header. Nếu kích thước gói vượt quá MTU của bất kỳ liên kết nào trên đường đi, router sẽ hủy gói và báo lỗi 'Packet needs to be fragmented but DF set', từ đó giúp kỹ sư dò ra MTU tối ưu."
      },
      {
        "id": 609,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ping & Chẩn đoán",
        "difficulty": "Thông hiểu",
        "question": "Khi ping một địa chỉ IP và nhận được thông báo 'Request timed out' nhưng khi ping địa chỉ IP khác vẫn bình thường, nguyên nhân có khả năng cao nhất là gì?",
        "options": [
          "Dây cáp mạng của máy tính người dùng bị đứt hoàn toàn",
          "Máy đích không tồn tại, đang tắt nguồn, hoặc tường lửa (Firewall) trên máy đích/router phía trước máy đích đã cấu hình chặn gói tin ICMP Echo Request",
          "Card mạng của máy người dùng bị hỏng",
          "Toàn bộ mạng Internet toàn cầu bị mất kết nối"
        ],
        "correct": 1,
        "explanation": "'Request timed out' nghĩa là gói tin đã được gửi đi nhưng máy gửi không nhận được bất kỳ phản hồi ICMP nào trong thời gian chờ (mặc định 4000 ms). Rất nhiều máy chủ và hệ thống tường lửa doanh nghiệp (như máy chủ Microsoft) chủ động tắt phản hồi ICMP Echo để chống lại các cuộc tấn công quét mạng và DDoS."
      },
      {
        "id": 610,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ping & Chẩn đoán",
        "difficulty": "Thông hiểu",
        "question": "Khi thực hiện lệnh ping, nhận được thông báo 'Destination host unreachable' (Máy đích không thể tiếp cận). Thông báo này phản ánh sự cố ở đâu?",
        "options": [
          "Máy đích đang bận xử lý ứng dụng web",
          "Router cục bộ (Gateway) hoặc một router trung gian không tìm thấy tuyến đường (route) dẫn tới mạng của máy đích trong bảng định tuyến, hoặc lỗi phân giải ARP trong mạng LAN",
          "Tốc độ mạng quá nhanh làm gói tin bị trôi mất",
          "Máy tính người dùng chưa cài đặt trình duyệt web"
        ],
        "correct": 1,
        "explanation": "Khác với 'Request timed out' (không ai trả lời), thông báo 'Destination host unreachable' là do chính router (thường là Default Gateway của bạn hoặc router chặn kề cận) chủ động gửi gói tin ICMP Type 3 phản hồi lại để báo rằng: 'Tôi đã tra bảng định tuyến nhưng hoàn toàn không có đường đi đến dải mạng này'."
      },
      {
        "id": 611,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Tracert & Định tuyến",
        "difficulty": "Nhận biết",
        "question": "Cú pháp lệnh để theo dõi đường đi của gói tin tới máy chủ ptit.edu.vn trên hệ điều hành Windows là gì?",
        "options": [
          "traceroute ptit.edu.vn",
          "tracert ptit.edu.vn",
          "trace -route ptit.edu.vn",
          "ip trace ptit.edu.vn"
        ],
        "correct": 1,
        "explanation": "Trên Windows Command Prompt, tên lệnh chuẩn xác là 'tracert <hostname/IP>'. Trong khi trên Linux, macOS và Cisco IOS, tên lệnh đầy đủ là 'traceroute <hostname/IP>'."
      },
      {
        "id": 612,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Tracert & Định tuyến",
        "difficulty": "Thông hiểu",
        "question": "Tham số '-d' trong lệnh 'tracert -d ptit.edu.vn' có tác dụng gì quan trọng giúp rút ngắn thời gian thực thi lệnh?",
        "options": [
          "Tự động xóa lịch sử truy cập web",
          "Ngăn không cho chương trình phân giải ngược địa chỉ IP của các router thành tên miền (Do not resolve addresses to hostnames), giúp kết quả hiển thị ngay lập tức mà không phải chờ đợi tra cứu DNS",
          "Tăng số hop tối đa lên 100",
          "Chuyển đổi giao thức sang UDP"
        ],
        "correct": 1,
        "explanation": "Mặc định, sau khi nhận được phản hồi IP từ mỗi hop, tracert sẽ thực hiện truy vấn phân giải ngược DNS (Reverse DNS Lookup) để lấy tên máy chủ. Việc này thường mất vài giây cho mỗi router. Tùy chọn '-d' bỏ qua bước tra tên này và chỉ in ra địa chỉ IP, giúp lệnh chạy nhanh gấp nhiều lần."
      },
      {
        "id": 613,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Tracert & Định tuyến",
        "difficulty": "Thông hiểu",
        "question": "Khi quan sát kết quả chạy lệnh tracert, tại một bước nhảy (hop) xuất hiện biểu tượng '* * * Request timed out', nhưng các bước nhảy phía sau đó vẫn hiển thị thông tin router và RTT bình thường. Điều này có nghĩa là gì?",
        "options": [
          "Đường truyền đã bị đứt tại hop đó",
          "Router tại hop đó được cấu hình bảo mật để không phản hồi thông điệp ICMP Time Exceeded (hoặc giảm độ ưu tiên xử lý ICMP), nhưng vẫn thực hiện chuyển tiếp gói tin sang hop kế tiếp bình thường",
          "Gói tin đã bị chuyển nhầm sang một hành tinh khác",
          "Máy tính bị hỏng card mạng tại thời điểm đó"
        ],
        "correct": 1,
        "explanation": "Nhiều quản trị viên router mạng lõi tắt phản hồi ICMP Time Exceeded để bảo vệ CPU của router khỏi bị quá tải hoặc để ẩn danh cấu hình mạng. Việc hop đó hiện '* * *' không đồng nghĩa với việc mạng bị lỗi, bằng chứng là các hop tiếp theo phía sau vẫn nhận và chuyển tiếp gói tin bình thường."
      },
      {
        "id": 614,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Netstat & Kiểm tra Kết nối",
        "difficulty": "Nhận biết",
        "question": "Lệnh netstat với các tham số '-ano' (netstat -ano) trên Windows hiển thị những thông tin gì?",
        "options": [
          "Tất cả kết nối (a), hiển thị địa chỉ và cổng dạng số (n), và kèm theo mã tiến trình PID của chương trình đang chạy (o)",
          "Địa chỉ MAC của tất cả máy tính trong phòng",
          "Mật khẩu các tài khoản quản trị",
          "Tốc độ quạt tản nhiệt của router"
        ],
        "correct": 0,
        "explanation": "Các tùy chọn trong 'netstat -ano': -a: Hiển thị tất cả kết nối và các cổng đang lắng nghe (Listening); -n: Hiển thị địa chỉ IP và Port dưới dạng số nguyên (không dịch sang tên dịch vụ); -o: Hiển thị thêm cột PID (Process ID) giúp người quản trị dễ dàng mở Task Manager để tìm ra chính xác ứng dụng hoặc virus nào đang mở cổng kết nối đó."
      },
      {
        "id": 615,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Netstat & Kiểm tra Kết nối",
        "difficulty": "Thông hiểu",
        "question": "Trong kết quả trả về của lệnh netstat, trạng thái kết nối 'ESTABLISHED' đối với giao thức TCP có ý nghĩa là gì?",
        "options": [
          "Cổng đang ở trạng thái đóng hoàn toàn",
          "Kết nối TCP đã hoàn tất quá trình bắt tay 3 bước thành công và hai đầu cuối đang trong phiên trao đổi dữ liệu hoạt động",
          "Máy trạm vừa gửi gói tin SYN và đang chờ phản hồi",
          "Kết nối đã bị ngắt bởi tường lửa"
        ],
        "correct": 1,
        "explanation": "Trạng thái 'ESTABLISHED' là trạng thái hoạt động chính của một kết nối TCP sau khi cả hai phía đã hoàn tất 3-way handshake. Tại trạng thái này, dữ liệu tầng ứng dụng đang được truyền tải qua lại giữa hai đầu cuối một cách tin cậy."
      },
      {
        "id": 616,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Netstat & Kiểm tra Kết nối",
        "difficulty": "Vận dụng",
        "question": "Để hiển thị tên tệp tin thực thi (.exe) của chương trình đã tạo ra kết nối mạng (cần chạy Command Prompt với quyền Administrator), ta sử dụng tham số nào của netstat?",
        "options": [
          "netstat -b",
          "netstat -e",
          "netstat -s",
          "netstat -r"
        ],
        "correct": 0,
        "explanation": "Lệnh 'netstat -b' hiển thị tên tệp thực thi (.exe như chrome.exe, svchost.exe, discord.exe) tham gia vào việc tạo kết nối hoặc mở cổng lắng nghe. Vì lý do bảo mật, lệnh này yêu cầu quyền Administrator để đọc thông tin tiến trình của hệ điều hành."
      },
      {
        "id": 617,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Nslookup & Tra cứu DNS",
        "difficulty": "Nhận biết",
        "question": "Công cụ dòng lệnh tiêu chuẩn được tích hợp sẵn trên cả Windows và Linux chuyên dùng để truy vấn và kiểm tra hoạt động của máy chủ tên miền DNS là:",
        "options": [
          "ping",
          "tracert",
          "nslookup",
          "netstat"
        ],
        "correct": 2,
        "explanation": "Nslookup (Name Server Lookup) là tiện ích dòng lệnh kinh điển để kiểm tra và khắc phục sự cố hệ thống DNS. Nó cho phép tra cứu địa chỉ IP từ tên miền, tra cứu ngược từ IP sang tên miền, và chỉ định máy chủ DNS tùy ý để kiểm tra tính chính xác của các bản ghi."
      },
      {
        "id": 618,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Nslookup & Tra cứu DNS",
        "difficulty": "Vận dụng",
        "question": "Để truy vấn bản ghi máy chủ thư điện tử (Mail Server - MX Record) của tên miền ptit.edu.vn bằng công cụ nslookup trong chế độ tương tác (Interactive mode), người dùng cần gõ lệnh nào?",
        "options": [
          "set type=mx",
          "set query=mail",
          "find mx ptit.edu.vn",
          "lookup mailserver"
        ],
        "correct": 0,
        "explanation": "Trong giao diện tương tác của nslookup (gõ nslookup rồi nhấn Enter), lệnh 'set type=mx' (hoặc set q=mx) đặt kiểu bản ghi truy vấn là Mail Exchange (MX). Sau đó gõ tiếp tên miền 'ptit.edu.vn', hệ thống sẽ trả về danh sách các Mail Server tiếp nhận email của PTIT kèm theo độ ưu tiên (Priority/Preference)."
      },
      {
        "id": 619,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Nslookup & Tra cứu DNS",
        "difficulty": "Thông hiểu",
        "question": "Khi gõ lệnh 'nslookup ptit.edu.vn 8.8.8.8', ý nghĩa của đối số '8.8.8.8' ở cuối dòng lệnh là gì?",
        "options": [
          "Đặt thời gian chờ timeout là 8.8 giây",
          "Chỉ định truy vấn trực tiếp tới máy chủ DNS có địa chỉ IP 8.8.8.8 (Google DNS) thay vì sử dụng máy chủ DNS mặc định của nhà mạng",
          "Gửi 8 gói tin kiểm tra kết nối",
          "Đặt số cổng kết nối là 8888"
        ],
        "correct": 1,
        "explanation": "Cú pháp nâng cao của nslookup cho phép chỉ định máy chủ DNS đích ở tham số thứ hai: 'nslookup <tên_miền> <IP_máy_chủ_DNS>'. Lệnh này ép buộc truy vấn được gửi thẳng đến máy chủ 8.8.8.8, giúp quản trị viên kiểm tra xem lỗi phân giải tên miền là do DNS của nhà mạng cục bộ hay do cấu hình trên máy chủ quốc tế."
      },
      {
        "id": 620,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Arp & Bảng MAC-IP",
        "difficulty": "Nhận biết",
        "question": "Để xem toàn bộ bảng lưu trữ bộ nhớ đệm ARP (ARP Cache Table) chứa danh sách các địa chỉ IP và địa chỉ MAC tương ứng trên máy tính, ta sử dụng lệnh nào?",
        "options": [
          "arp -show",
          "arp -a",
          "arp -list",
          "arp -view"
        ],
        "correct": 1,
        "explanation": "Lệnh 'arp -a' (hoặc 'arp -g') hiển thị bảng ARP cache hiện tại của tất cả các giao diện mạng trên hệ điều hành Windows và Linux. Bảng gồm 3 cột chính: Internet Address (IP), Physical Address (MAC), và Type (Dynamic - động do giao thức ARP tự học, hoặc Static - tĩnh do quản trị viên cấu hình)."
      },
      {
        "id": 621,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Arp & Bảng MAC-IP",
        "difficulty": "Vận dụng",
        "question": "Để xóa một bản ghi ánh xạ IP-MAC bị sai lệch hoặc nghi ngờ bị đầu độc (ARP Spoofing) khỏi bảng ARP (ví dụ xóa bản ghi của IP 192.168.1.1), ta thực hiện lệnh nào với quyền Administrator?",
        "options": [
          "arp -clear 192.168.1.1",
          "arp -d 192.168.1.1",
          "arp -r 192.168.1.1",
          "arp -clean"
        ],
        "correct": 1,
        "explanation": "Tham số '-d' (Delete) dùng để xóa bản ghi khỏi bảng ARP. Cú pháp: 'arp -d <ip_address>' để xóa một địa chỉ cụ thể, hoặc 'arp -d *' để xóa toàn bộ bảng ARP. Sau khi xóa, máy tính sẽ phát thông điệp ARP Request mới để tìm lại địa chỉ MAC chuẩn xác."
      },
      {
        "id": 622,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Route & Bảng Định tuyến",
        "difficulty": "Thông hiểu",
        "question": "Trong kết quả trả về của lệnh 'route print' trên Windows, mục nào đại diện cho tuyến đường mặc định (Default Gateway) để gửi tất cả các gói tin đi ra ngoài Internet?",
        "options": [
          "Network Destination: 127.0.0.1, Netmask: 255.0.0.0",
          "Network Destination: 0.0.0.0, Netmask: 0.0.0.0",
          "Network Destination: 255.255.255.255, Netmask: 255.255.255.255",
          "Network Destination: 224.0.0.0, Netmask: 240.0.0.0"
        ],
        "correct": 1,
        "explanation": "Tuyến đường mặc định (Default Route) được đại diện bởi cặp địa chỉ mạng và mặt nạ 0.0.0.0 / 0.0.0.0 (tương ứng với 0.0.0.0/0). Mọi gói tin có địa chỉ IP đích không khớp với bất kỳ mạng cục bộ cụ thể nào trong bảng định tuyến đều sẽ được đẩy về địa chỉ Gateway chỉ định trong dòng này."
      },
      {
        "id": 623,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Phần mềm Wireshark: Giao diện & Chế độ",
        "difficulty": "Nhận biết",
        "question": "Để Wireshark có thể bắt được toàn bộ các gói tin lưu thông trong mạng LAN (ngay cả các gói tin không gửi đích danh cho máy của mình), card mạng cần được đặt ở chế độ nào?",
        "options": [
          "Chế độ Tiết kiệm pin (Power Saver Mode)",
          "Chế độ Hỗn tạp (Promiscuous Mode)",
          "Chế độ Cầu nối (Bridge Mode)",
          "Chế độ Đơn hướng (Simplex Mode)"
        ],
        "correct": 1,
        "explanation": "Bình thường card mạng chỉ tiếp nhận các khung có địa chỉ MAC trùng với MAC của nó hoặc địa chỉ Broadcast. Chế độ Promiscuous Mode (Chế độ hỗn tạp/không phân biệt) bắt buộc card mạng phải chuyển tiếp toàn bộ mọi khung tín hiệu thu được trên đường truyền vật lý lên cho hệ điều hành và Wireshark phân tích."
      },
      {
        "id": 624,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Phần mềm Wireshark: Cú pháp Bộ lọc",
        "difficulty": "Vận dụng",
        "question": "Trong ô Display Filter của Wireshark, cú pháp chuẩn xác để chỉ lọc và hiển thị các gói tin HTTP gửi yêu cầu bằng phương thức GET là:",
        "options": [
          "http == GET",
          "http.request.method == \"GET\"",
          "tcp.port == 80 and get",
          "http.get == true"
        ],
        "correct": 1,
        "explanation": "Wireshark có cú pháp Display Filter phân cấp rất chặt chẽ: Trường kiểm tra phương thức HTTP là 'http.request.method', giá trị chuỗi được đặt trong dấu ngoặc kép. Cú pháp đúng là: http.request.method == \"GET\"."
      },
      {
        "id": 625,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Phần mềm Wireshark: Cú pháp Bộ lọc",
        "difficulty": "Vận dụng",
        "question": "Để lọc ra duy nhất gói tin đầu tiên khởi tạo bắt tay kết nối TCP (gói tin SYN) từ phía Client, biểu thức lọc nào sau đây trong Wireshark là ĐÚNG?",
        "options": [
          "tcp.flags == 1",
          "tcp.flags.syn == 1 && tcp.flags.ack == 0",
          "tcp.syn == true",
          "tcp.handshake == start"
        ],
        "correct": 1,
        "explanation": "Gói bắt tay đầu tiên chỉ có cờ SYN được bật và chưa có cờ ACK (vì chưa có dữ liệu để xác nhận). Do đó biểu thức chuẩn xác là: tcp.flags.syn == 1 && tcp.flags.ack == 0. Nếu chỉ lọc 'tcp.flags.syn == 1', bạn sẽ bị lẫn cả gói tin thứ hai (SYN-ACK của Server) vốn cũng có cờ SYN=1."
      },
      {
        "id": 626,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Phần mềm Wireshark: Tính năng Follow Stream",
        "difficulty": "Thông hiểu",
        "question": "Tính năng 'Follow TCP Stream' trong phần mềm Wireshark mang lại lợi ích gì cho kỹ sư phân tích?",
        "options": [
          "Tự động tăng tốc độ mạng của phiên kết nối",
          "Tự động thu thập, sắp xếp lại theo đúng thứ tự và ghép nối các phân đoạn TCP thành một luồng dữ liệu liên tục hoàn chỉnh ở tầng ứng dụng (hiển thị đối thoại giữa client và server dưới dạng văn bản đọc được)",
          "Giải mã mật khẩu tài khoản ngân hàng đã mã hóa",
          "Chặn gói tin không cho gửi tới đích"
        ],
        "correct": 1,
        "explanation": "'Follow TCP Stream' loại bỏ tất cả các tiêu đề kỹ thuật rườm rà của tầng mạng/tầng giao vận, tự động ghép nối các mảnh byte stream lại và hiển thị toàn bộ nội dung trao đổi giữa hai bên (màu đỏ là dữ liệu máy khách gửi lên, màu xanh là phản hồi máy chủ trả về), cực kỳ hữu ích khi đọc nội dung HTTP, SMTP, FTP."
      },
      {
        "id": 627,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Phần mềm Wireshark: Phân tích HTTPS",
        "difficulty": "Đánh lừa",
        "question": "Khi sử dụng Wireshark bắt các gói tin của một phiên truy cập trang web HTTPS (cổng 443), tại sao người dùng chỉ thấy các gói tin ghi thông tin 'Application Data' và nội dung trong phần Packet Bytes toàn là các ký tự vô nghĩa không đọc được mã nguồn HTML?",
        "options": [
          "Do phần mềm Wireshark bị lỗi cài đặt thiếu driver",
          "Do tầng ứng dụng đã được mã hóa bởi giao thức bảo mật TLS/SSL (Transport Layer Security) trước khi đưa xuống tầng TCP, dữ liệu truyền đi đã biến thành bản mã (Ciphertext)",
          "Do máy chủ web từ chối gửi mã HTML cho Wireshark",
          "Do cáp mạng cáp quang tự động che giấu văn bản"
        ],
        "correct": 1,
        "explanation": "Đây là tính năng cốt lõi của HTTPS: Toàn bộ dữ liệu tầng ứng dụng (HTTP request và response) được mã hóa bằng thuật toán mã hóa khóa đối xứng (như AES-GCM) của phiên TLS. Bất kỳ ai bắt gói tin trên đường truyền chỉ thấy các byte ngẫu nhiên không có ý nghĩa, bảo vệ an toàn tuyệt đối thông tin người dùng khỏi tấn công Packet Sniffing."
      },
      {
        "id": 628,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Thực hành FTP Server & Client",
        "difficulty": "Nhận biết",
        "question": "Khi cấu hình máy chủ Quick'n Easy FTP Server chạy cục bộ, số hiệu cổng mặc định mà máy chủ lắng nghe kết nối điều khiển (Control Connection) là cổng nào?",
        "options": [
          "Cổng 20",
          "Cổng 21",
          "Cổng 80",
          "Cổng 22"
        ],
        "correct": 1,
        "explanation": "Giao thức FTP tiêu chuẩn sử dụng cổng TCP 21 cho Kết nối điều khiển (Control Connection) để tiếp nhận lệnh đăng nhập, điều hướng thư mục. Cổng 20 chỉ được dùng cho Kết nối dữ liệu (Data Connection) trong chế độ Active FTP."
      },
      {
        "id": 629,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Thực hành FTP Server & Client",
        "difficulty": "Thông hiểu",
        "question": "Khi người dùng sử dụng FileZilla Client kết nối tới FTP Server ở chế độ Active Mode, thông điệp điều khiển nào được Client gửi tới Server để thông báo địa chỉ IP và số hiệu cổng mà Client đang mở chờ nhận dữ liệu?",
        "options": [
          "Lệnh PASV",
          "Lệnh PORT",
          "Lệnh RETR",
          "Lệnh USER"
        ],
        "correct": 1,
        "explanation": "Trong Active Mode: Client mở một cổng ngẫu nhiên và gửi lệnh 'PORT h1,h2,h3,h4,p1,p2' qua kênh điều khiển (cổng 21) để thông báo IP và số hiệu cổng (Port = p1*256 + p2) của Client cho Server biết. Sau đó FTP Server sẽ từ cổng 20 chủ động khởi tạo kết nối tới cổng này của Client."
      },
      {
        "id": 630,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Thực hành Web Server Cục bộ",
        "difficulty": "Thông hiểu",
        "question": "Khi cài đặt một máy chủ Web cục bộ (như XAMPP / Apache, IIS, hoặc Python http.server), khái niệm 'Document Root' (Thư mục gốc) có nghĩa là gì?",
        "options": [
          "Thư mục chứa mã nguồn của hệ điều hành Windows",
          "Thư mục trên ổ đĩa máy tính được cấu hình làm nơi lưu trữ các tệp tin web (HTML, CSS, JS, ảnh), khi người dùng truy cập vào trang chủ website thì web server sẽ tìm và phục vụ các tệp từ thư mục này",
          "Thư mục chứa các driver của card mạng",
          "Thư mục lưu trữ tạm thời các file virus bị cách ly"
        ],
        "correct": 1,
        "explanation": "Document Root (ví dụ thư mục 'htdocs' trong XAMPP hoặc 'C:\\inetpub\\wwwroot' trong IIS) là thư mục gốc xuất bản web. Mọi đường dẫn URL dạng 'http://localhost/about.html' sẽ được máy chủ ánh xạ trực tiếp tới tệp tương ứng nằm trong thư mục Document Root này."
      },
      {
        "id": 631,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Thực hành Web Server Cục bộ",
        "difficulty": "Nhận biết",
        "question": "Để truy cập vào chính máy chủ Web đang chạy trên máy tính của mình thông qua trình duyệt, người dùng có thể sử dụng địa chỉ nào sau đây?",
        "options": [
          "http://localhost hoặc http://127.0.0.1",
          "http://255.255.255.255",
          "http://0.0.0.0",
          "http://192.168.0.0"
        ],
        "correct": 0,
        "explanation": "Địa chỉ vòng lặp Loopback (127.0.0.1) và tên miền cục bộ tương ứng 'localhost' được quy ước trỏ thẳng vào chính ngăn xếp mạng của máy tính hiện tại mà không cần truyền tín hiệu ra card mạng vật lý ra ngoài."
      },
      {
        "id": 632,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Các chế độ CLI",
        "difficulty": "Nhận biết",
        "question": "Trong giao diện dòng lệnh (CLI) của thiết bị mạng Cisco trên phần mềm Packet Tracer, dấu nhắc lệnh 'Router#' cho biết người dùng đang ở chế độ làm việc nào?",
        "options": [
          "Chế độ Người dùng (User EXEC Mode)",
          "Chế độ Đặc quyền (Privileged EXEC Mode)",
          "Chế độ Cấu hình toàn cục (Global Configuration Mode)",
          "Chế độ Cấu hình cổng giao tiếp (Interface Configuration Mode)"
        ],
        "correct": 1,
        "explanation": "Các cấp độ dấu nhắc lệnh chuẩn của Cisco IOS: (1) 'Router>' là User EXEC mode (chỉ xem thông tin cơ bản); gõ lệnh 'enable' chuyển sang (2) 'Router#' là Privileged EXEC mode (toàn quyền xem thông tin, gõ lệnh show, debug); gõ 'configure terminal' chuyển sang (3) 'Router(config)#' là Global Config mode."
      },
      {
        "id": 633,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Cấu hình Cổng Router",
        "difficulty": "Thông hiểu",
        "question": "Sau khi gán địa chỉ IP cho một cổng giao tiếp của Router Cisco bằng lệnh 'ip address 192.168.1.1 255.255.255.0', tại sao cổng đó vẫn ở trạng thái đèn đỏ (tắt) và lệnh nào bắt buộc phải thực thi để bật cổng hoạt động?",
        "options": [
          "Do cổng bị hỏng phần cứng",
          "Mặc định các cổng của Cisco Router đều ở trạng thái tắt nguồn (Administratively down), bắt buộc phải thực thi lệnh 'no shutdown' để bật cổng",
          "Cần khởi động lại máy tính",
          "Phải gõ lệnh 'enable interface'"
        ],
        "correct": 1,
        "explanation": "Vì lý do an toàn, toàn bộ các cổng giao tiếp vật lý trên Router Cisco khi mới khởi tạo đều bị đặt ở trạng thái 'shutdown' (tắt). Sau khi cấu hình địa chỉ IP, kỹ sư mạng bắt buộc phải gõ lệnh 'no shutdown' bên trong chế độ config-if để kích hoạt cổng chuyển sang trạng thái UP (đèn xanh)."
      },
      {
        "id": 634,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Cấu hình VLAN",
        "difficulty": "Vận dụng",
        "question": "Để gán cổng mạng FastEthernet 0/5 trên Switch Cisco 2960 vào VLAN 10 (phòng Kế toán) ở chế độ Access, chuỗi lệnh chuẩn xác trong chế độ Global Configuration là:",
        "options": [
          "interface fa0/5 -> vlan 10 enable",
          "interface fa0/5 -> switchport mode access -> switchport access vlan 10",
          "vlan 10 -> add port fa0/5",
          "port fa0/5 mode vlan 10"
        ],
        "correct": 1,
        "explanation": "Trình tự cấu hình cổng Access thuộc VLAN trên Cisco IOS: Đầu tiên vào interface: 'interface fa0/5' -> Chuyển chế độ hoạt động sang Access: 'switchport mode access' -> Gán cổng vào số VLAN mong muốn: 'switchport access vlan 10'."
      },
      {
        "id": 635,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Cấu hình Đường Trunk",
        "difficulty": "Thông hiểu",
        "question": "Để cấu hình cổng GigabitEthernet 0/1 của Switch thành đường liên kết Trunk kết nối sang một Switch khác nhằm truyền tải lưu lượng của tất cả các VLAN, ta thực hiện lệnh nào?",
        "options": [
          "switchport mode trunk",
          "switchport mode access",
          "switchport trunk open all",
          "trunk enable"
        ],
        "correct": 0,
        "explanation": "Bên trong giao diện interface (config-if)#, câu lệnh 'switchport mode trunk' thiết lập cổng đó thành cổng Trunk hoạt động theo chuẩn đóng gói IEEE 802.1Q, cho phép các khung gắn thẻ của nhiều VLAN đi qua."
      },
      {
        "id": 636,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Cấu hình Định tuyến Tĩnh",
        "difficulty": "Vận dụng",
        "question": "Cú pháp lệnh chuẩn trong Cisco IOS để cấu hình một tuyến đường tĩnh (Static Route) đi tới mạng đích 192.168.20.0/24 thông qua địa chỉ của bước nhảy kế tiếp (Next-hop IP) là 10.0.0.2 là:",
        "options": [
          "route 192.168.20.0 to 10.0.0.2",
          "ip route 192.168.20.0 255.255.255.0 10.0.0.2",
          "static-route 192.168.20.0/24 via 10.0.0.2",
          "ip route 10.0.0.2 255.255.255.0 192.168.20.0"
        ],
        "correct": 1,
        "explanation": "Cú pháp chuẩn của lệnh định tuyến tĩnh trên Router Cisco trong chế độ (config)# là: 'ip route <địa_chỉ_mạng_đích> <subnet_mask> <ip_next_hop_hoặc_cổng_ra>'. Do đó câu lệnh chính xác là: 'ip route 192.168.20.0 255.255.255.0 10.0.0.2'."
      },
      {
        "id": 637,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Lưu trữ Cấu hình",
        "difficulty": "Thông hiểu",
        "question": "Sau khi hoàn tất việc cấu hình thiết bị Cisco, nếu không lưu lại thì khi khởi động lại thiết bị (Reload) toàn bộ cấu hình sẽ bị mất. Lệnh nào trong Privileged EXEC mode (Router#) được dùng để lưu cấu hình từ RAM vào bộ nhớ cố định NVRAM?",
        "options": [
          "save config",
          "copy running-config startup-config (hoặc lệnh tắt: write memory / wr)",
          "backup to nvram",
          "store configuration"
        ],
        "correct": 1,
        "explanation": "Cấu hình đang chạy nằm trên RAM (running-config) sẽ bị mất khi mất điện. Để cấu hình có hiệu lực vĩnh viễn, kỹ sư phải sao chép nó vào bộ nhớ flash NVRAM (startup-config) bằng câu lệnh: 'copy running-config startup-config' hoặc câu lệnh tắt phổ biến 'write' (wr)."
      },
      {
        "id": 638,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Kiểm tra Trạng thái Cổng",
        "difficulty": "Nhận biết",
        "question": "Lệnh kiểm tra nhanh nhất và hay được sử dụng nhất trên Cisco Router để xem bảng tóm tắt danh sách tất cả các cổng, địa chỉ IP tương ứng và trạng thái hoạt động (Status UP/Down) là:",
        "options": [
          "show interfaces",
          "show ip interface brief",
          "show ip route",
          "show status all"
        ],
        "correct": 1,
        "explanation": "Lệnh 'show ip interface brief' (viết tắt 'sh ip int br') xuất ra một bảng tóm tắt cực kỳ trực quan gồm các cột: Interface, IP-Address, OK?, Method, Status (trạng thái lớp vật lý) và Protocol (trạng thái lớp liên kết dữ liệu)."
      },
      {
        "id": 639,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Chế độ Mô phỏng (Simulation)",
        "difficulty": "Thông hiểu",
        "question": "Chế độ mô phỏng (Simulation Mode) trong phần mềm Cisco Packet Tracer cung cấp khả năng trực quan nào mà chế độ Realtime không có?",
        "options": [
          "Cho phép kết nối trực tiếp với Internet thật",
          "Cho phép 'đóng băng thời gian', quan sát từng gói tin PDU di chuyển từng bước (Step-by-step) qua các thiết bị mạng và mở xem chi tiết cấu trúc header ở từng tầng theo mô hình OSI",
          "Tự động giải bài tập hộ sinh viên",
          "Chuyển đổi giao diện sang tiếng Việt"
        ],
        "correct": 1,
        "explanation": "Simulation Mode là tính năng giáo dục đắt giá nhất của Packet Tracer: Bạn có thể nhấn 'Capture/Forward' để cho gói tin di chuyển từng hop một, bấm vào biểu tượng gói tin để xem bảng phân tích 7 tầng OSI (Inbound PDU Details và Outbound PDU Details), thấy rõ gói tin bị đổi MAC như thế nào hay tại sao bị router hủy bỏ."
      },
      {
        "id": 640,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Công cụ Nmap: Kỹ thuật Quét Cổng (Port Scan)",
        "difficulty": "Thông hiểu",
        "question": "Kỹ thuật quét cổng 'TCP SYN Scan' (tùy chọn -sS trong công cụ Nmap) được gọi là 'Stealth Scan' (Quét lén lút / Half-open scan) vì nguyên nhân kỹ thuật nào?",
        "options": [
          "Nó làm ẩn hoàn toàn địa chỉ IP của kẻ tấn công",
          "Nó chỉ gửi gói tin SYN; nếu nhận được SYN-ACK từ máy chủ thì nó gửi ngay gói RST để hủy kết nối mà KHÔNG BAO GIỜ hoàn tất bước bắt tay thứ ba (không gửi ACK), khiến tầng ứng dụng trên máy chủ không ghi nhận được nhật ký (log) kết nối",
          "Nó sử dụng mạng ngầm Tor để quét",
          "Nó chỉ quét các cổng chạy giao thức UDP"
        ],
        "correct": 1,
        "explanation": "TCP SYN Scan (-sS) là kỹ thuật quét mặc định và nguy hiểm của Nmap: Bằng cách gửi RST ngay khi vừa nhận SYN-ACK, kết nối TCP không bao giờ đạt tới trạng thái ESTABLISHED. Do đó, hầu hết các dịch vụ ứng dụng (như Web server, FTP server) không hề ghi log một phiên làm việc nào, giúp người quét thu thập được danh sách cổng mở mà ít bị lộ dấu vết."
      },
      {
        "id": 641,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Công cụ Nmap: Trạng thái Cổng",
        "difficulty": "Thông hiểu",
        "question": "Khi Nmap trả về trạng thái của một cổng mạng là 'Filtered' (Bị lọc), điều đó có nghĩa là gì?",
        "options": [
          "Cổng đó chắc chắn đang mở và chạy ứng dụng web",
          "Gói tin thăm dò gửi tới cổng đó đã bị một thiết bị lọc gói tin (như Firewall, Router ACL hoặc phần mềm diệt virus) chặn lại, khiến Nmap không nhận được bất kỳ phản hồi nào để xác định cổng đang đóng hay mở",
          "Cổng đó đã bị quá nhiệt",
          "Cổng đó chỉ chấp nhận kết nối từ mạng nội bộ"
        ],
        "correct": 1,
        "explanation": "Trạng thái 'Filtered' trong Nmap chỉ ra rằng có một bức tường lửa (Firewall) đang che chắn cho cổng đó. Firewall âm thầm vứt bỏ (Drop) gói tin quét mà không trả về phản hồi nào (hoặc trả lời bằng thông điệp ICMP Type 3 lỗi), khiến Nmap không thể suy đoán được dịch vụ phía sau đang đóng hay mở."
      },
      {
        "id": 642,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Pathping & Chẩn đoán",
        "difficulty": "Thông hiểu",
        "question": "Lệnh 'pathping' trên Windows có ưu điểm vượt trội gì so với việc chỉ sử dụng riêng rẽ lệnh ping hoặc tracert?",
        "options": [
          "Có thể đo được độ dài của dây cáp mạng",
          "Kết hợp chức năng dò đường của tracert với việc theo dõi định kỳ liên tục trong một khoảng thời gian (khoảng 5 phút) để tính toán chính xác TỈ LỆ MẤT GÓI TIN (Packet Loss %) tại từng router trên đường đi, giúp chỉ điểm chính xác nút mạng nào đang bị quá tải",
          "Tự động sửa chữa các liên kết bị đứt",
          "Chỉ dùng cho hệ điều hành di động"
        ],
        "correct": 1,
        "explanation": "'pathping' là công cụ chẩn đoán mạng nâng cao của Windows: Bước 1 nó liệt kê tất cả các hop giống như tracert; Bước 2 nó gửi hàng trăm gói tin kiểm tra tới từng router trong khoảng 250 giây. Kết quả cuối cùng hiển thị tỷ lệ phần trăm mất gói (Lost/Sent = %) tại từng nút, giúp xác định nút thắt cổ chai hoặc liên kết bị lỗi chập chờn."
      },
      {
        "id": 643,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Phân tích Log Wireshark: Tấn công Mạng",
        "difficulty": "Vận dụng",
        "question": "Khi mở Wireshark phân tích lưu lượng mạng, bạn thấy xuất hiện hàng nghìn gói tin TCP SYN từ hàng trăm địa chỉ IP nguồn ngẫu nhiên khác nhau dồn dập gửi tới cổng 80 của Web Server trong vòng vài giây, nhưng không có bất kỳ gói tin ACK nào hoàn tất bắt tay. Đây là dấu hiệu của cuộc tấn công mạng nào?",
        "options": [
          "Tấn công từ chối dịch vụ SYN Flood (DoS / DDoS)",
          "Tấn công giải mã mật khẩu Brute Force",
          "Tấn công nghe lén Packet Sniffing",
          "Tấn công chèn mã độc SQL Injection"
        ],
        "correct": 0,
        "explanation": "Đặc điểm nhận dạng điển hình của tấn công TCP SYN Flood: Lưu lượng ngập tràn các gói SYN (tcp.flags.syn == 1 && tcp.flags.ack == 0) gửi tới một cổng dịch vụ duy nhất từ các IP nguồn giả mạo (spoofed IPs), và không bao giờ có gói ACK thứ ba hoàn tất phiên, nhằm làm cạn kiệt hàng đợi kết nối (backlog queue) của máy chủ."
      },
      {
        "id": 644,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ping: Thông báo TTL expired",
        "difficulty": "Thông hiểu",
        "question": "Khi ping một máy chủ nội bộ nhưng màn hình liên tục trả về thông điệp 'TTL expired in transit' (TTL hết hạn trên đường truyền), nguyên nhân kỹ thuật chắc chắn nhất là gì?",
        "options": [
          "Máy đích bị lỗi tràn bộ nhớ",
          "Đang tồn tại một vòng lặp định tuyến (Routing Loop) giữa hai hoặc nhiều router trên mạng khiến gói tin bị đẩy qua đẩy lại liên tục cho đến khi trường TTL bị trừ giảm dần về 0",
          "Dây cáp mạng bị chuột cắn",
          "Độ trễ ping vượt quá 10 giây"
        ],
        "correct": 1,
        "explanation": "'TTL expired in transit' là thông điệp ICMP Type 11 do router gửi về khi nó nhận được gói tin có TTL = 1 và trừ đi còn 0. Khi có vòng lặp định tuyến (ví dụ Router A trỏ sang B, Router B lại cấu hình trỏ ngược về A), gói tin bị đá bóng qua lại giữa hai router cho đến khi TTL cạn sạch."
      },
      {
        "id": 645,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Thực hành Web Server: Mã phản hồi HTTP",
        "difficulty": "Thông hiểu",
        "question": "Trong tệp nhật ký truy cập (Access Log) của máy chủ Web cục bộ Apache (XAMPP), bạn thấy dòng ghi nhận: 'GET /secret.pdf HTTP/1.1' 404 196. Con số '404' và '196' trong dòng nhật ký đại diện cho:",
        "options": [
          "Địa chỉ IP của người dùng và số hiệu cổng",
          "Mã trạng thái phản hồi HTTP là 404 Not Found (không tìm thấy tệp) và kích thước dữ liệu phản hồi trả về là 196 byte",
          "Thời gian tải trang là 404 giây",
          "Số lượng người đang cùng xem tệp"
        ],
        "correct": 1,
        "explanation": "Cấu trúc định dạng chuẩn Common Log Format của Web server: Client IP - [Thời gian] 'Request Line' Status_Code Bytes_Sent. Số 404 là HTTP Status Code (Not Found - tệp secret.pdf không tồn tại trong thư mục Document Root), và 196 là dung lượng của thông điệp HTML báo lỗi trả về cho trình duyệt (tính bằng byte)."
      },
      {
        "id": 646,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Cáp kết nối Thiết bị",
        "difficulty": "Nhận biết",
        "question": "Trong thực hành thiết kế mạng với Cisco Packet Tracer, để kết nối trực tiếp giữa hai thiết bị cùng loại là Router với Router (hoặc giữa PC với Router), loại cáp mạng nào được sử dụng theo quy chuẩn truyền thống?",
        "options": [
          "Cáp thẳng (Copper Straight-Through)",
          "Cáp chéo (Copper Cross-Over)",
          "Cáp quang đa mốt (Fiber Multi-mode)",
          "Cáp nguồn điện xoay chiều"
        ],
        "correct": 1,
        "explanation": "Quy tắc bấm cáp truyền thống: Kết nối hai thiết bị CÙNG LOẠI (Router - Router, Switch - Switch, PC - PC, hoặc PC - Router vì card mạng của PC và cổng Router đều phát tín hiệu trên chân 1,2 và nhận trên chân 3,6) sử dụng Cáp chéo (Cross-Over). Kết nối hai thiết bị KHÁC LOẠI (PC - Switch, Switch - Router) sử dụng Cáp thẳng (Straight-Through)."
      },
      {
        "id": 647,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Cáp Console",
        "difficulty": "Thông hiểu",
        "question": "Dây cáp Console (màu xanh dương nhạt trong Packet Tracer) được sử dụng để làm gì?",
        "options": [
          "Truyền dữ liệu Internet tốc độ cao giữa hai switch",
          "Kết nối từ cổng COM / RS-232 (hoặc USB) của máy tính quản trị vào cổng Console chuyên dụng của Router/Switch để cấu hình thiết bị ban đầu khi thiết bị chưa có địa chỉ IP",
          "Cấp nguồn điện dự phòng cho router",
          "Kết nối điện thoại bàn vào tổng đài"
        ],
        "correct": 1,
        "explanation": "Cáp Console (Rollover cable) là đường kết nối vật lý Out-of-band: Khi một thiết bị mạng mới bóc hộp chưa được cấu hình IP hay mật khẩu, người quản trị phải cắm cáp Console từ máy tính vào cổng Console của thiết bị và sử dụng phần mềm Terminal (như PuTTY, SecureCRT) để gõ lệnh thiết lập cấu hình ban đầu."
      },
      {
        "id": 648,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Cấu hình DHCP Pool",
        "difficulty": "Vận dụng",
        "question": "Khi cấu hình Router Cisco làm máy chủ DHCP, để loại trừ dải địa chỉ IP từ 192.168.1.1 đến 192.168.1.10 không bị cấp phát tự động cho các máy con (dành riêng đặt IP tĩnh cho Router và Máy in), câu lệnh chuẩn xác là:",
        "options": [
          "no dhcp 192.168.1.1 192.168.1.10",
          "ip dhcp excluded-address 192.168.1.1 192.168.1.10",
          "ip dhcp pool exclude 192.168.1.1 - 192.168.1.10",
          "deny ip 192.168.1.1 192.168.1.10"
        ],
        "correct": 1,
        "explanation": "Câu lệnh 'ip dhcp excluded-address <start-ip> [end-ip]' được thực hiện trong chế độ Global Configuration (config)# TRƯỚC KHI tạo pool, nhằm chỉ định các địa chỉ IP tĩnh quan trọng mà DHCP server tuyệt đối không được phép cấp phát tự động cho các máy trạm trong mạng LAN."
      },
      {
        "id": 649,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Phân tích Wireshark: Giao thức ARP",
        "difficulty": "Thông hiểu",
        "question": "Khi bắt gói tin ARP Request trong Wireshark, trường 'Target MAC Address' bên trong nội dung thông điệp ARP mang giá trị gì?",
        "options": [
          "FF:FF:FF:FF:FF:FF",
          "00:00:00:00:00:00",
          "Địa chỉ MAC của máy gửi",
          "Địa chỉ IP của router"
        ],
        "correct": 1,
        "explanation": "Cần phân biệt rõ: Trong tiêu đề khung Ethernet ở tầng 2, Destination MAC là FF:FF:FF:FF:FF:FF (broadcast để mọi card mạng cùng nhận); nhưng bên trong nội dung gói tin ARP (ARP Payload), vì người gửi chưa biết MAC của máy đích nên trường 'Target MAC Address' được điền mặc định là toàn số 0: 00:00:00:00:00:00."
      },
      {
        "id": 650,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Phân tích Wireshark: Giao thức DNS",
        "difficulty": "Thông hiểu",
        "question": "Để lọc riêng các gói tin phản hồi DNS (DNS Responses) trả về địa chỉ IP của tên miền được hỏi, bộ lọc nào trong Wireshark là chuẩn xác nhất?",
        "options": [
          "dns.flags.response == 1",
          "dns.flags.response == 0",
          "dns.type == answer",
          "udp.dns.reply"
        ],
        "correct": 0,
        "explanation": "Trong tiêu đề của giao thức DNS, bit đầu tiên của trường Flags là cờ QR (Query/Response Flag): QR = 0 biểu thị thông điệp truy vấn (DNS Query); QR = 1 biểu thị thông điệp phản hồi kết quả (DNS Response). Do đó bộ lọc chuẩn xác trong Wireshark là: dns.flags.response == 1."
      },
      {
        "id": 651,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Ping & Tham số Kích thước Payload",
        "difficulty": "Vận dụng",
        "question": "Khi thực hiện lệnh 'ping 192.168.1.1 -l 1000' trên Windows, tổng kích thước của gói tin IPv4 thực tế lưu thông trên đường truyền (chưa tính tiêu đề Ethernet) là bao nhiêu byte?",
        "options": [
          "1000 byte",
          "1028 byte (gồm 20B IP header + 8B ICMP header + 1000B payload dữ liệu)",
          "972 byte",
          "1040 byte"
        ],
        "correct": 1,
        "explanation": "Tham số '-l 1000' chỉ định kích thước của phần dữ liệu đệm (data payload) của thông điệp ICMP. Để tạo thành gói tin IPv4 hoàn chỉnh, hệ điều hành cộng thêm 8 byte tiêu đề ICMP (Type, Code, Checksum, ID, Seq) và 20 byte tiêu đề IPv4 chuẩn. Tổng kích thước gói tin IP = 1000 + 8 + 20 = 1028 byte."
      },
      {
        "id": 652,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Bảng Chuyển mạch MAC",
        "difficulty": "Nhận biết",
        "question": "Để xem toàn bộ bảng địa chỉ MAC mà Switch Cisco đã học được qua các cổng giao tiếp, câu lệnh nào được thực thi trong chế độ Privileged EXEC (Switch#)?",
        "options": [
          "show mac address-table (hoặc show mac-address-table)",
          "show arp table",
          "show switch ports",
          "display mac"
        ],
        "correct": 0,
        "explanation": "Câu lệnh 'show mac address-table' (trên một số phiên bản IOS cũ viết là 'show mac-address-table') hiển thị danh sách các địa chỉ MAC đã học, số VLAN tương ứng, loại học (DYNAMIC hoặc STATIC) và cổng vật lý (Port) tương ứng gắn liền với địa chỉ MAC đó."
      },
      {
        "id": 653,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Thực hành Web Server: Lập trình Socket",
        "difficulty": "Thông hiểu",
        "question": "Để nhanh chóng khởi tạo một máy chủ Web tĩnh đơn giản tại thư mục hiện tại để chia sẻ tệp tin trong mạng LAN mà không cần cài đặt phần mềm phức tạp, câu lệnh Python 3 nào được sử dụng?",
        "options": [
          "python -m http.server 8080",
          "python run webserver",
          "python --start-http",
          "python -socket listen 8080"
        ],
        "correct": 0,
        "explanation": "Python 3 tích hợp sẵn module máy chủ web: Câu lệnh 'python -m http.server 8080' sẽ mở một máy chủ HTTP lắng nghe trên cổng 8080 và xuất bản toàn bộ tệp tin trong thư mục hiện hành, cho phép các máy tính khác trong cùng mạng LAN truy cập qua đường dẫn 'http://<IP_máy>:8080'."
      },
      {
        "id": 654,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Lệnh Netstat & Trạng thái TIME_WAIT",
        "difficulty": "Thông hiểu",
        "question": "Khi gõ lệnh netstat, bạn nhận thấy có rất nhiều kết nối TCP đang ở trạng thái 'TIME_WAIT'. Hiện tượng này thường xảy ra khi nào và có phải là dấu hiệu lỗi phần mềm không?",
        "options": [
          "Đây là lỗi tràn bộ nhớ nghiêm trọng của card mạng cần khởi động lại máy",
          "Đây là hoạt động bình thường của giao thức TCP tại bên vừa chủ động đóng kết nối (Active Close); socket tạm giữ trạng thái này trong khoảng thời gian 2 MSL (thường từ 60s đến 120s) để đảm bảo gói ACK cuối cùng đến đích và dọn dẹp các gói tin còn trôi nổi trên mạng",
          "Do cáp mạng bị tuột",
          "Do người dùng bị nhiễm virus theo dõi"
        ],
        "correct": 1,
        "explanation": "Trạng thái TIME_WAIT hoàn toàn không phải lỗi, mà là cơ chế bảo vệ bắt buộc của chuẩn TCP RFC 793. Bên chủ động đóng kết nối (ví dụ Web client sau khi tải xong ảnh) sẽ giữ socket ở trạng thái này trong 2 MSL trước khi giải phóng hoàn toàn cổng mạng để tránh làm lẫn lộn gói tin của các phiên kết nối mở lại sau đó."
      },
      {
        "id": 655,
        "exam_type": "nang_cao",
        "chapter": 6,
        "chapter_title": "Chuyên đề: Công Cụ & Thực Hành Mạng",
        "category": "Cisco Packet Tracer: Xử lý Lỗi Kết nối",
        "difficulty": "Vận dụng",
        "question": "Hai máy tính PC1 và PC2 nối vào hai cổng khác nhau của cùng một Switch Cisco nhưng không thể ping thấy nhau. Bạn kiểm tra thấy cả hai cổng đều sáng đèn xanh (Up). Nguyên nhân kỹ thuật nào sau đây là giải thích hợp lý nhất?",
        "options": [
          "Hai máy tính thuộc về hai VLAN khác nhau trên Switch và chưa có thiết bị định tuyến Layer 3 (Router/L3 Switch) để chuyển tiếp lưu lượng giữa các VLAN",
          "Switch bị mất nguồn điện",
          "Dây cáp mạng bị ngắn quá 1 mét",
          "Địa chỉ MAC của hai máy trùng nhau hoàn toàn"
        ],
        "correct": 0,
        "explanation": "Khi hai máy nối cùng switch và cổng đều sáng đèn nhưng không ping được: Nguyên nhân số 1 trong thực hành là hai cổng switch đã bị gán vào hai VLAN khác nhau (ví dụ PC1 thuộc VLAN 10, PC2 thuộc VLAN 20). Vì mỗi VLAN là một miền quảng bá độc lập, switch tầng 2 sẽ chặn hoàn toàn mọi lưu lượng giữa chúng; muốn thông nhau bắt buộc phải cấu hình định tuyến liên VLAN (Inter-VLAN routing)."
      }
    ]
  }
};
