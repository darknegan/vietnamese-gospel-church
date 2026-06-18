import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../core/language.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Localized } from '../../core/i18n.types';
import { SERVICE_TIMES, SITE } from '../../shared/site.data';

@Component({
  selector: 'app-visit',
  imports: [ButtonModule, LocalizePipe],
  templateUrl: './visit.component.html',
  styleUrl: './visit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitComponent {
  private readonly languageService = inject(LanguageService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly lang = this.languageService.lang;
  readonly site = SITE;
  readonly serviceTimes = SERVICE_TIMES;

  readonly mapEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps?q=Garden+Grove+CA&output=embed',
  );

  readonly tips: readonly { icon: string; title: Localized; body: Localized }[] = [
    {
      icon: 'pi pi-car',
      title: { en: 'Parking', vi: 'Đậu xe' },
      body: {
        en: 'Free parking is available in our lot. Greeters will help you find your way in.',
        vi: 'Có chỗ đậu xe miễn phí trong bãi của chúng tôi. Ban tiếp tân sẽ hướng dẫn bạn vào trong.',
      },
    },
    {
      icon: 'pi pi-users',
      title: { en: 'Kids', vi: 'Trẻ em' },
      body: {
        en: 'Safe, fun children’s classes run during the Sunday service. Check-in opens 15 minutes early.',
        vi: 'Lớp thiếu nhi an toàn và vui tươi diễn ra trong giờ nhóm Chúa Nhật. Nhận trẻ mở cửa sớm 15 phút.',
      },
    },
    {
      icon: 'pi pi-heart',
      title: { en: 'What to wear', vi: 'Trang phục' },
      body: {
        en: 'Come as you are. You’ll see everything from áo dài to jeans — what matters is that you’re here.',
        vi: 'Hãy đến đúng như bạn là. Bạn sẽ thấy từ áo dài đến quần jeans — điều quan trọng là bạn có mặt.',
      },
    },
  ];

  readonly t = {
    eyebrow: { en: 'Plan a visit', vi: 'Lên kế hoạch ghé thăm' } as Localized,
    title: { en: 'We can’t wait to meet you', vi: 'Chúng tôi rất mong gặp bạn' } as Localized,
    lead: {
      en: 'Here’s everything you need to know for your first Sunday. Have a question? Reach out anytime.',
      vi: 'Đây là tất cả những gì bạn cần biết cho Chúa Nhật đầu tiên. Có câu hỏi? Hãy liên hệ bất cứ lúc nào.',
    } as Localized,
    timesTitle: { en: 'Service times', vi: 'Giờ nhóm' } as Localized,
    findUs: { en: 'Find us', vi: 'Tìm chúng tôi' } as Localized,
    address: { en: 'Address', vi: 'Địa chỉ' } as Localized,
    contact: { en: 'Contact', vi: 'Liên hệ' } as Localized,
    directions: { en: 'Get directions', vi: 'Chỉ đường' } as Localized,
    tipsTitle: { en: 'Good to know', vi: 'Điều nên biết' } as Localized,
  };
}
