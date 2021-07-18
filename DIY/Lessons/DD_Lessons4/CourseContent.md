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
- Để mở CLI:
    
    - Mac: Mở ứng Terminal đã được cài đặt sẵn trên mọi máy Mac
    - Windows: Cài đặt Git Bash bằng cách download phần mềm [Git (https://git-scm.com/downloads)](https://git-scm.com/downloads)

Sau khi mở CLI, chúng ta sẽ thấy một giao diện như sau 
:
```bash
bdatd@DESKTOP-DJ6USCP MINGW64 ~
$
```
Mac:
```bash
```
tại đây:

- `bdatd@DESKTOP-DJ6USCP` là tên người dùng và tên máy tính
- `MINGW64` chương trình đặc biệt được CLI sử dụng (có thể bỏ qua)
- `~` là cách viết tắt thư mục mặc định của người dùng (ở Windows sẽ là `/c/Users/<tên ng dùng>`, ở Mac sẽ là `/Users/<tên ng dùng>`). 
- `$` là nơi bắt đầu nhận câu lệnh từ người sử dụng

#### Trường hợp 1: Truy cập vào các thư mục khác nhau

1. Để có thể xem hiên tại mình đang ở thư mục nào, chúng ta sẽ dùng
```bash
$ pwd 
/c/Users/bdatd
```
2. Để xem trong thư mục hiện tại có những thư mục gì
```bash
$ ls 
'3D Objects'/                                                                                   OneDrive/
 AppData/                                                                                       Pictures/
'Application Data'@                                                                             Postman/
 Contacts/                                                                                      PrintHood@
 Cookies@                                                                                       Recent@
 Documents/                                                                                    'Saved Games'/
 Downloads/                                                                                     Searches/
 Favorites/                                                                                     SendTo@
 #...
```

* những item có dấu `/` ở cuối là ám chỉ những thư mục. dấu `@` ở cuối thường là những chương trình. không có dấu có nghĩ là những tệp file
3. Để có thể truy cập một thư mục con
```bash
# cd <tên thư mục con>
bdatd@DESKTOP-DJ6USCP MINGW64 ~
$ cd Pictures/

bdatd@DESKTOP-DJ6USCP MINGW64 ~/Pictures
$

# Nếu thư mục có dấu cách thì cần có dấu `\` trước những dấu cách đó
$ cd Saved\ Games/
```

4. Nếu muốn truy cập thư mục mẹ của thư mục hiện tại
```bash
bdatd@DESKTOP-DJ6USCP MINGW64 ~/Pictures
$ cd ..

bdatd@DESKTOP-DJ6USCP MINGW64 ~
$
```

* Ngoài ra, chúng ta có truy cập thư mục con của một thư mục bằng cách nối tiếp các tên thư mục với nhau bằng `/`
```bash
$ cd ~/Documents/My\ Music/

$ cd ../../../ # ám chỉ thư mục mẹ của thư mục mẹ của thư mục mẹ
```

#### Trường hợp 2: Cài đặt chương trình

1. Để có thể cài đặt các chương trình qua CLI, chúng ta cần một chương trình quản lí chương trình (Package manager) cho CLI đó. Ở Mac thường dùng `brew` còn ở Windows thường dùng `Chocolatey`. Link và hướng dẫn cài đặt đã được post tại [Curriculum của DIY camp](https://docs.google.com/spreadsheets/d/1ZR0JhasZGJJ88ngb8VqV6Lx06WLkDUwjpSIiEf6hUus/edit#gid=691196640)

2. Để cài đặt chương trình, chúng ta cần biết tên chương trình đó. *Lưu ý: cùng một chương có thể sẽ có tên hơi khác nhau một chút trên những package manager khác nhau*
```
# Mac Bash
$ brew install git

# Windows Git Bash
$ choco install git
```

* Khi một số chương trình khi cài đặt sẽ đòi hỏi quyền điều hành trực tiếp từ Mac và Windows. Để trao quyền điều hành này:
```
# Mac Bash 
$ sudo brew install git

# Khi chạy git bash cần chạy với quyền Admin (chuột phải -> Run as Administrator)
$ choco install git
```

#### Trường hợp 3: Chạy các chương trình

1. Để có thể chạy chương trình, chúng ta sẽ chạy bằng tên của chúng. Trước hết chúng ta nên kiểm tra xem chương trình đó có tồn tại trong máy tính hay không
```bash
# which là câu lệnh đẻ kiểm tra. which <tên chương trình>
$ which git
/mingw64/bin/git
```

2. Nếu chương trình có tồn tại, chúng ta có thể chay chương trình bằng cách gọi tên chương trình như một khẩu lệnh
```bash
$ git
# ...
```

#### Trường hợp 4: Dừng một chương trình đang chạy
1. Một số chương trình có thể chạy trên liên tục trong CLI. để có thể dừng những chương trình này chúng ta sẽ dùng tổ hợp phìm `Ctrl + C` (`Ctrl + C` hoặc `Cmd + C` cho Mac)

### Git
#### Giới thiệu

- Git là công cụ phổ biến để lưu trữ và duy trì lịch sử của một thư mục (có file nào được cho vào, file nào bị xóa, hay dữ liệu trong file thay đổi như thế nào)
- Để có thể làm được điều này, Git sẽ theo dõi biến đổi của từng file trong thư mục và lưu trử những biến đổi đó trong một thứ gọi là `Commit`
- Để Git biết thư mục nào cần phải duy trì, git cần một thư mục ẩn `.git`. Từ CLI, mình có thể tạo thư mục này bằng câu lệnh `git init`
- Git sẽ duy trì các thông tin tại ít nhất 2 môi trường chính:
    - `local`: máy tính hiện đang sử dụng vủa các developer
    - `remote`: thường là một máy tính ở trên đám mây, thường được quản lí bởi các dịch vụ như GitHub, GitLab. những dự án được lưu trử trên đây thường được gọi là `repository`
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
- Đây là một khái niệm rất phổ biến khi xây dựng phần mềm. Khái niệm này (tên gọi khác là Single Responsibility Principle) ám chỉ rằng những tính năng, thông tin hay quá trình xử lí khác nhau thì nên được duy trì một cách cô lập. Một cách giải thích khác ở đây là mỗi một đơn vị (function, file, service, etc) thường chỉ có một và chỉ một trách nhiệm duy nhất
- Khi chúng ta đi theo khái niệm này, việc xây dựng và quản lí phần mềm sẽ trở nên dễ dàng hơn, đặc biệt là khi sản phẩm có những vấn đề cần phải sửa

#### Vậy lầm thế nào để các đơn vị này có thể trao đổi dữ liệu được với nhau?

- Các đơn vị sẽ khai báo đây là những dịch vụ hay tính năng mà đơn vị đó cần trước khi bắt đầu đi làm nhiệm vụ của mình. Sự khai báo này được gọi là `Dependency Injection`
- Những dịch vụ được phụ thuộc cũng sẽ phải khai báo rằng đây là những tính năng mà các đơn vị khác được phép sử dụng
- Hầu hết các ngôn ngữ lập trình thường được xây dựng tính năng này:
    - Python
    ```
    import numpy
    ```
    - JavaScript
    ```
    const lodash = require("lodash")
    // hoặc
    import lodash from "lodash"
    ```

## Actions
- Tạo một tài khoản GitHub và nhờ mentor để tham gia vào nhóm Develophvn
- Tạo một dự án mới ở GitHub với DevelophVN Organization. Đây sẽ là nơi sản phẩm DIY được phát triển và lưu trữ
## Extra Resources

- [What is CLI? (https://www.hostinger.com/tutorials/what-is-cli)](https://www.hostinger.com/tutorials/what-is-cli)