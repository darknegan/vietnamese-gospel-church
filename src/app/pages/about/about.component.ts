import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { LanguageService } from '../../core/language.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Localized } from '../../core/i18n.types';
import { PEOPLE, SINGING } from '../../shared/church-assets';
import { LEADERS, PILLARS } from './about.data';
import { BELIEFS } from './about-beliefs.data';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, RouterLink, ButtonModule, AccordionModule, LocalizePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;

  readonly storyImage = SINGING[2];
  readonly missionImage = PEOPLE[0];
  readonly leaders = LEADERS;
  readonly pillars = PILLARS;
  readonly beliefs = BELIEFS;

  readonly t = {
    eyebrow: { en: 'About us', vi: 'Về chúng tôi' } as Localized,
    title: { en: 'A church family rooted in the gospel', vi: 'Một gia đình hội thánh đặt nền trên Phúc Âm' } as Localized,
    lead: {
      en: 'Vietnamese Gospel Church is a bilingual community in Garden Grove where Vietnamese heritage and the hope of Jesus meet across every generation.',
      vi: 'Hội Thánh Phúc Âm là một cộng đồng song ngữ tại Garden Grove, nơi di sản Việt và niềm hy vọng nơi Chúa Giê-xu gặp nhau qua mọi thế hệ.',
    } as Localized,
    storyEyebrow: { en: 'Our story', vi: 'Câu chuyện của chúng tôi' } as Localized,
    storyTitle: { en: 'Two languages, one family', vi: 'Hai ngôn ngữ, một gia đình' } as Localized,
    storyP1: {
      en: 'What began as a small group of families praying together has grown into a vibrant church that worships in both Vietnamese and English. We exist to help people of every age know Jesus, grow in his word, and belong to a loving community.',
      vi: 'Khởi đầu là một nhóm nhỏ các gia đình cùng cầu nguyện, nay đã trở thành một hội thánh đầy sức sống thờ phượng bằng cả tiếng Việt và tiếng Anh. Chúng tôi hiện hữu để giúp mọi lứa tuổi nhận biết Chúa Giê-xu, lớn lên trong Lời Ngài và thuộc về một cộng đồng yêu thương.',
    } as Localized,
    storyP2: {
      en: 'Whether you grew up in church, are returning after time away, or are exploring faith for the first time, you are welcome here exactly as you are.',
      vi: 'Dù bạn lớn lên trong hội thánh, đang trở lại sau một thời gian, hay lần đầu tìm hiểu đức tin — bạn được chào đón đúng như con người của mình.',
    } as Localized,
    pillarsEyebrow: { en: 'What we value', vi: 'Giá trị của chúng tôi' } as Localized,
    pillarsTitle: { en: 'Worship, discipleship, and mission', vi: 'Thờ phượng, môn đồ hóa và sứ mạng' } as Localized,
    leadersEyebrow: { en: 'Our leaders', vi: 'Ban lãnh đạo' } as Localized,
    leadersTitle: { en: 'Meet the team', vi: 'Gặp gỡ đội ngũ' } as Localized,
    beliefsEyebrow: { en: 'What we believe', vi: 'Điều chúng tôi tin' } as Localized,
    beliefsTitle: { en: 'What we believe', vi: 'Điều chúng tôi tin' } as Localized,
    beliefsLead: {
      en: 'These core beliefs shape everything we do as a church.',
      vi: 'Những niềm tin nền tảng này định hình mọi điều chúng tôi làm.',
    } as Localized,
    scripture: { en: 'Scripture', vi: 'Kinh Thánh' } as Localized,
    ctaTitle: { en: 'Come visit this Sunday', vi: 'Hãy ghé thăm Chúa Nhật này' } as Localized,
    visit: { en: 'Plan a visit', vi: 'Lên kế hoạch ghé thăm' } as Localized,
  };
}
