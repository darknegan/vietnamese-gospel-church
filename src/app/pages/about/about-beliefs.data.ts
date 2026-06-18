import { Localized } from '../../core/i18n.types';

export interface Belief {
  readonly num: string;
  readonly title: Localized;
  readonly body: Localized;
  readonly references: readonly string[];
}

export const BELIEFS: readonly Belief[] = [
  {
    num: '01',
    title: { en: 'God', vi: 'Đức Chúa Trời' },
    body: {
      en: 'God is the Creator and Ruler of the universe. He has eternally existed in three persons: the Father, the Son, and the Holy Spirit. These three are co-equal and are one God.',
      vi: 'Đức Chúa Trời là Đấng Tạo Hóa và Cai Trị vũ trụ. Ngài hằng hữu đời đời trong ba ngôi: Đức Cha, Đức Con và Đức Thánh Linh. Ba ngôi đồng đẳng và là một Đức Chúa Trời.',
    },
    references: ['Genesis 1:1', 'Matthew 28:19', '1 Peter 1:2'],
  },
  {
    num: '02',
    title: { en: 'Jesus Christ', vi: 'Chúa Giê-xu Christ' },
    body: {
      en: 'Jesus Christ is the Son of God, co-equal with the Father. He lived a sinless life, died on the cross for our sins, rose bodily from the dead, ascended to heaven, and will return again as King.',
      vi: 'Chúa Giê-xu Christ là Con Đức Chúa Trời, đồng đẳng với Đức Cha. Ngài sống một đời vô tội, chịu chết trên thập tự giá vì tội lỗi chúng ta, sống lại từ kẻ chết, thăng thiên, và sẽ trở lại làm Vua.',
    },
    references: ['John 1:1-5', 'Hebrews 4:14-15', '1 Corinthians 15:3-4'],
  },
  {
    num: '03',
    title: { en: 'The Holy Spirit', vi: 'Đức Thánh Linh' },
    body: {
      en: 'The Holy Spirit is co-equal with the Father and the Son. He convicts the world of sin, lives in every believer from the moment of salvation, and gives power, truth, and guidance for daily life.',
      vi: 'Đức Thánh Linh đồng đẳng với Đức Cha và Đức Con. Ngài cáo trách thế gian về tội lỗi, ngự trong mỗi tín hữu kể từ lúc được cứu, và ban quyền năng, lẽ thật cùng sự dẫn dắt cho đời sống hằng ngày.',
    },
    references: ['2 Corinthians 3:17', 'John 16:7-13', 'Galatians 5:25'],
  },
  {
    num: '04',
    title: { en: 'Eternity', vi: 'Cõi Đời Đời' },
    body: {
      en: 'People were created to exist forever. We will either be eternally separated from God by sin, or eternally united with God through forgiveness and salvation. To be eternally separated from God is hell; to be eternally in union with him is eternal life.',
      vi: 'Con người được tạo dựng để tồn tại đời đời. Chúng ta sẽ hoặc bị phân cách khỏi Đức Chúa Trời đời đời vì tội lỗi, hoặc được hiệp một với Ngài đời đời nhờ sự tha thứ và cứu rỗi. Sự phân cách đời đời là địa ngục; sự hiệp một đời đời là sự sống đời đời.',
    },
    references: ['John 3:16', 'Romans 6:23', 'Revelation 20:15'],
  },
  {
    num: '05',
    title: { en: 'Humanity', vi: 'Loài Người' },
    body: {
      en: 'People are made in the image of God to be like him in character. Though every person has tremendous potential for good, we are all marred by an attitude of disobedience toward God called sin, which separates us from him.',
      vi: 'Loài người được dựng nên theo hình ảnh Đức Chúa Trời để giống Ngài về bản tính. Dù mỗi người có tiềm năng lớn lao để làm điều thiện, tất cả chúng ta đều bị hư hoại bởi thái độ bất tuân với Đức Chúa Trời gọi là tội lỗi, điều phân cách chúng ta khỏi Ngài.',
    },
    references: ['Genesis 1:27', 'Psalm 8:3-6', 'Isaiah 53:6a'],
  },
  {
    num: '06',
    title: { en: 'Salvation', vi: 'Sự Cứu Rỗi' },
    body: {
      en: 'Salvation is a gift from God. We can never make up for our sin by self-improvement or good works. Only by trusting in Jesus Christ as God’s offer of forgiveness can we be saved from sin’s penalty. Eternal life begins the moment we receive Jesus by faith.',
      vi: 'Sự cứu rỗi là món quà từ Đức Chúa Trời. Chúng ta không thể nào chuộc tội bằng việc tự hoàn thiện hay làm việc lành. Chỉ nhờ tin cậy Chúa Giê-xu Christ — sự tha thứ mà Đức Chúa Trời ban — chúng ta mới được cứu khỏi hình phạt của tội lỗi. Sự sống đời đời bắt đầu ngay khi chúng ta tiếp nhận Chúa Giê-xu bởi đức tin.',
    },
    references: ['Ephesians 2:8-9', 'John 14:6', 'Romans 5:1'],
  },
  {
    num: '07',
    title: { en: 'Eternal Security', vi: 'Sự Bảo Đảm Đời Đời' },
    body: {
      en: 'Because God gives us eternal life through Jesus Christ, the true believer is secure in that salvation for eternity. Salvation is maintained by the grace and power of God, not by the self-effort of the Christian.',
      vi: 'Vì Đức Chúa Trời ban cho chúng ta sự sống đời đời qua Chúa Giê-xu Christ, tín hữu chân thật được bảo đảm trong sự cứu rỗi đó đến đời đời. Sự cứu rỗi được giữ gìn bởi ân điển và quyền năng của Đức Chúa Trời, chứ không bởi nỗ lực riêng của con người.',
    },
    references: ['John 10:29', '2 Timothy 1:12', 'Hebrews 7:25'],
  },
  {
    num: '08',
    title: { en: 'The Bible', vi: 'Kinh Thánh' },
    body: {
      en: 'The Bible is God’s word to us. It was written by human authors under the supernatural guidance of the Holy Spirit. It is the supreme source of truth for Christian beliefs and living, and because it is inspired by God, it is truth without any mixture of error.',
      vi: 'Kinh Thánh là lời của Đức Chúa Trời cho chúng ta. Kinh Thánh do các trước giả loài người viết dưới sự hướng dẫn siêu nhiên của Đức Thánh Linh. Đây là nguồn lẽ thật tối cao cho niềm tin và đời sống Cơ Đốc, và vì được Đức Chúa Trời linh cảm nên hoàn toàn là chân lý, không pha lẫn sai lầm.',
    },
    references: ['2 Timothy 3:16-17', '2 Peter 1:20-21', 'Psalm 119:105'],
  },
  {
    num: '09',
    title: { en: 'Baptism', vi: 'Phép Báp-têm' },
    body: {
      en: 'Baptism by immersion is a step of obedience after a person has trusted Christ — not a requirement for salvation. It is a public profession of faith and a beautiful picture of dying to the old life and rising to new life in Jesus.',
      vi: 'Phép báp-têm bằng cách dìm mình là một bước vâng lời sau khi một người đã tin cậy Đấng Christ — không phải là điều kiện để được cứu. Đây là lời tuyên xưng đức tin công khai và là hình ảnh đẹp đẽ về việc chết đi đời sống cũ và sống lại trong đời sống mới nơi Chúa Giê-xu.',
    },
    references: ['Matthew 28:19-20', 'Romans 6:4', 'Acts 8:36-38'],
  },
  {
    num: '10',
    title: { en: 'The Lord’s Supper', vi: 'Tiệc Thánh' },
    body: {
      en: 'The Lord’s Supper is a command from Jesus to remember his sacrifice. The bread and the cup point to his body and blood given for us. We come with self-examination, in unity as one family, proclaiming the gospel until he returns.',
      vi: 'Tiệc Thánh là mệnh lệnh của Chúa Giê-xu để tưởng nhớ sự hy sinh của Ngài. Bánh và chén tượng trưng cho thân thể và huyết Ngài đã ban cho chúng ta. Chúng ta đến với lòng tự xét, hiệp một như một gia đình, và rao truyền Phúc Âm cho đến khi Ngài trở lại.',
    },
    references: ['1 Corinthians 11:23-26', 'Luke 22:19-20'],
  },
];
