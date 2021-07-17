# CLI, Git and The Concept of Modularity

## Background

- Để làm những việc thường ngày với máy tính, chúng ta thường tương tác thông qua những giao diện từ đơn giản cho đến phức tạp. Những giao diện này giúp chúng ta có thể sử dụng máy tính bằng các phương tiện khác nhau (touch, chuột bàn phím) một cách dễ dàng và thân thiện. Ở buổi học này, mọi người sẽ được làm quen với một phương pháp khác để sử dụng máy tính một cách chính xác và hiệu quả hơn (tuy nhiên sẽ ít thân thiện hơn)
- Chúng ta cũng sẽ được giới thiệu qua về Git, chương trình quản lí phiên bản phần mềm giúp chúng ta có năng lực siêu nhiên, có khả năng tạo ra các dòng thời gian khác nhau và thậm chí đi ngược lại quá khứ
- Cuối cùng, chúng ta sẽ đi qua một chút về khái niệm chia để trị trong lĩnh vực xây dựng phần mềm. Đây là một trong những khái niệm nền tảng mà chúng ta luôn phải chú ý để có khả năng xây dựng những sản phẩm lâu dài hay có quy mô lớn

## Content

- Thay vì đi sâu vào tính năng và định nghĩa của các câu lệnh, buổi học này sẽ có format như sau

    1. Giới thiệu về chương trình, bao gồm khái niệm và một số thuật ngữ liên quan
    2. Đưa ra những tình huống, trường hợp thường gặp và cách giải quyết bằng chương trình đó
    3. Một số điều cần lưu ý

### CLI

#### Giới thiệu
- khi xây dựng hay phát triển phần mềm, các lập trình viên thường sử dụng Command Line Interface (CLI) để có thể nói chuyện rất trực tiếp với máy tính. CLI thường sẽ rất tối ưu hóa trong việc xử lí và hiển thị các dữ liệu, giúp máy tính sử dụng rất ít tài nguyên những lại có thể truyền tải thông tin đến người dùng một cách hiệu quả.
- Tùy vào các hệ điều hành hay các môi trường khác nhau, CLI cũng có những phiên bản khác nhau
    
    - PowerShell
    - Bash
    - GitBash
    - Shell
    - Zsh
    - Fish

- Về mặt nền tảng, những phiên bản này đều có mục đích giống nhau (gửi lệnh cho máy tính). Song vì cách vận hành khác nhau (do cấu trúc hệ điều hành khác nhau, môi trường khác nhau, etc), các câu lệnh có chút thay đổi và một số chương trình sẽ không tương thích trên mọi CLI
- Tại Developh, chúng ta sẽ tập trung vào Bash (Mac, Linux) và Git Bash (Windows) để những chương trình được giới thiệu sẽ chạy dễ dàng hơn

#### Trường hợp 1: Truy cập vào các thư mục khác nhau

#### Trường hợp 2: Cài đặt chương trình
#### Trường hợp 3: Chạy các chương trình

#### Lưu ý

### Git
#### Giới thiệu

- Git là công cụ phổ biến để lưu trữ và duy trì lịch sử của một thư mục (có file nào được cho vào, file nào bị xóa, hay dữ liệu trong file thay đổi như thế nào)
- Để có thể làm được điều này, Git sẽ theo dõi biến đổi của từng file trong thư mục và lưu trử những biến đổi đó trong một thứ gọi là `Commit`
- Để Git biết thư mục nào cần phải duy trì, git cần một thư mục ẩn `.git`. Từ CLI, mình có thể tạo thư mục này bằng câu lệnh `git init`
- Git sẽ duy trì các thông tin tại ít nhất 2 môi trường chính:
    - `local`: máy tính hiện đang sử dụng vủa các developer
    - `remote`: thường là một máy tính ở trên đám mây, thường được quản lí bởi các dịch vụ như GitHub, GitLab
- Những môi trường này sẽ duy trì độc lập với nhau và những developer phải update thủ công nếu muốn đồng bộ hóa nhưng môi trường này

#### Trường hợp 1: Lưu trữ phiên bản hiện tại của dự án
#### Trường hợp 2a: Lấy phiên bản mới nhất của một dự án mới bằng Git
#### Trường hợp 2b: Lấy phiên bản mới nhất của một dự án đã bắt đầu phát triển bằng Git
#### Trường hợp 3: Tạo ra nhưng phiên bản song song (để thử nghiệm tính năng mới, duy trì các phiên bản khác nhau etc)
#### Trường hợp 4: Kết hợp 2 phiên bản lại thành 1
#### Trường hợp 5: Quay trở lại một phiên bản cũ trong quá khứ

#### Lưu ý

### Concept of Modularity

- Khi nhìn một chút vào thiết kế của những chương trình CLI hay Git, chúng ta thấy một điểm tương đồng là các chương trình đi theo hướng chia để trị (vd: một chương trình CLI thường sẽ có một nhiệm vụ nhất định, một commit của git chỉ duy trì một thời điểm nhất định, etc)

## Actions
## Extra Resources

- [What is CLI? (https://www.hostinger.com/tutorials/what-is-cli)](https://www.hostinger.com/tutorials/what-is-cli)